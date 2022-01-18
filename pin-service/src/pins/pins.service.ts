import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import {
  catchError,
  EmptyError,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  of,
  tap,
  throwError,
  throwIfEmpty,
  timeout,
  TimeoutError,
} from 'rxjs';
import { Repository } from 'typeorm';
import { Page } from './entities/page.entity';

type QueryParams = {
  page: number;
  per_page?: number;
  query?: string;
};

@Injectable()
export class PinsService {
  constructor(
    @InjectRepository(Page)
    private readonly pageRepository: Repository<Page>,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private cache = new Map<string, Page>();

  private fetchPage(
    url: string,
    key: string,
    params: QueryParams,
  ): Observable<Page> {
    Logger.log(`Fetching [url: ${url}] with params: ${JSON.stringify(params)}`);

    return this.httpService
      .get(url, {
        params: params,
        headers: {
          Authorization: this.configService.get<string>('PEXELS_API_KEY'),
        },
      })
      .pipe(
        timeout(5000),
        catchError((err) => {
          if (err instanceof TimeoutError) {
            return throwError(() => new RequestTimeoutException());
          }
          return throwError(() => err);
        }),
        map((it) => {
          return { ...it.data, key };
        }),
        mergeMap((it) => this.pageRepository.save(it)),
      );
  }

  retrievePage(
    url: string,
    key: string,
    queryParams: QueryParams,
  ): Observable<Page> {
    const page = this.cache.get(key);

    if (page !== undefined) {
      return of(page);
    }

    return from(this.pageRepository.findOne(key)).pipe(
      filter((page) => page !== undefined),
      throwIfEmpty(),
      catchError((err) =>
        err instanceof EmptyError
          ? this.fetchPage(url, key, { ...queryParams, per_page: 80 })
          : throwError(() => err),
      ),
      tap((it) => this.cache.set(key, it)),
    );
  }

  findAll(pageNo: number): Observable<Page> {
    const key = `curated${pageNo}`;
    const url = 'https://api.pexels.com/v1/curated';
    return this.retrievePage(url, key, { page: pageNo });
  }

  search(searchString: string, pageNo: number): Observable<Page> {
    const key = searchString.concat(pageNo.toString());
    const url = 'https://api.pexels.com/v1/search';
    return this.retrievePage(url, key, { page: pageNo, query: searchString });
  }
}
