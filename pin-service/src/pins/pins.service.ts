import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, EmptyError, filter, from, map, mergeMap, Observable, of, tap, throwError, throwIfEmpty, timeout, TimeoutError } from 'rxjs';
import { Repository } from 'typeorm';
import { Page } from './entities/page.entity';

@Injectable()
export class PinsService {
  constructor(
    @InjectRepository(Page)
    private readonly pageRepository: Repository<Page>,
    private httpService: HttpService,
    private configService: ConfigService) { }

  private cache: Page[] = [];

  private fetchPage(pageNo: number): Observable<Page> {
    Logger.log(`Fetching page:[${pageNo}] from [https://api.pexels.com/v1/curated]`)

    return this.httpService
      .get(`https://api.pexels.com/v1/curated?page=${pageNo}&per_page=80`, {
        headers: {
          Authorization: this.configService.get<string>("PEXELS_API_KEY")
        }
      })
      .pipe(
        timeout(5000),
        catchError(err => {
          if (err instanceof TimeoutError) {
            return throwError(() => new RequestTimeoutException());
          }
          return throwError(() => err);
        }),
        map((it) => it.data),
        mergeMap((it) => this.pageRepository.save(it))
      );
  }

  findAll(pageNo: number): Observable<Page> {
    if (this.cache.length >= pageNo) {
      return of(this.cache[pageNo - 1]);
    }

    return from(this.pageRepository.findOne(pageNo))
      .pipe(
        filter(page => page !== undefined),
        throwIfEmpty(),
        catchError((err) =>
          err instanceof EmptyError ?
            this.fetchPage(pageNo) : throwError(() => err)
        ),
        tap((it) => this.cache.push(it))
      );
  }
}

