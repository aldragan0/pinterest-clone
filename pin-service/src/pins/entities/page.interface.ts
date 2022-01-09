import { Pin } from "./pin.entity";

export interface PageInterface {
    page: number
    per_page: number
    photos: Pin[]
    next_page: string
}