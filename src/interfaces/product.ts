import { Decimal } from "@prisma/client/runtime/library";

export type Product = {
    name : string,
    price : Decimal,
    image : string,
    category : string,
    description : string,
    rating : Decimal,
}