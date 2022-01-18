import { Column, Entity, OneToMany, PrimaryColumn, Unique } from 'typeorm';
import { PageInterface } from './page.interface';
import { Pin } from './pin.entity';

@Entity()
@Unique(['key'])
export class Page implements PageInterface {
  @PrimaryColumn()
  key: string;

  per_page: number;

  @OneToMany(() => Pin, (pin) => pin.page, {
    cascade: true,
    eager: true,
  })
  photos: Pin[];

  @Column()
  next_page: string;
}
