import { ImageInterface } from "./image.interface";
import { PageInterface } from "./page.interface";

export interface PinInterface {
    id: number
    url: string
    photographer: string
    avg_color: string
    src: ImageInterface
    alt: string
    page: PageInterface
}