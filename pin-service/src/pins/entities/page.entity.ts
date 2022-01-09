import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { PageInterface } from "./page.interface";
import { Pin } from "./pin.entity";

@Entity()
@Unique(['page'])
export class Page implements PageInterface {
    @PrimaryColumn()
    page: number;

    per_page: number;

    @OneToMany(() => Pin, pin => pin.page, {
        cascade: true,
        eager: true
    })
    photos: Pin[];

    @Column()
    next_page: string;
}