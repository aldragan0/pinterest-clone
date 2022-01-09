import { PinType } from "./PinType";

export interface PageType {
    page: number
    per_page: number
    photos: PinType[]
    next_page: string
}