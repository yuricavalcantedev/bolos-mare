import { ItemInProduct } from "../models/itemInProduct.model";

export class ProductDTO{
    
    id: number;
    name: string;
    price: number;
    itemsList: ItemInProduct[] = [];

    constructor(){}
}