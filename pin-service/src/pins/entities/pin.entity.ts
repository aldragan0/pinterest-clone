import { Column, Entity, ManyToOne, PrimaryColumn, Unique } from "typeorm";
import { ImageInterface } from "./image.interface";
import { Page } from "./page.entity";
import { PinInterface } from "./pin.interface";

export class Image implements ImageInterface {
    @Column()
    large: string;
}

@Entity()
@Unique(['id'])
export class Pin implements PinInterface {
    @PrimaryColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    photographer: string;

    @Column()
    avg_color: string;

    @Column(() => Image)
    src: Image;

    @Column()
    alt: string;

    @ManyToOne(() => Page, page => page.photos)
    page: Page
}