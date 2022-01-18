import { Pin } from './pin.entity';

export interface PageInterface {
  key: string;
  per_page: number;
  photos: Pin[];
  next_page: string;
}
