import { Product } from "../models/product.model";

export class OrderCreateDTO{

    id: number;
    totalAmount: number;
    note: string;
    productList: Product[];

    constructor(){}
}