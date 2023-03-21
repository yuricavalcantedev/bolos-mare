import { Product } from "./product.model";

export class Order{
    id: number;
    createdDate: Date;
    updatedDate: Date;
    price: number;
    productList: Product[];

    constructor(){}
}