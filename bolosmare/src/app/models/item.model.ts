import { ItemInProduct } from "./itemInProduct.model";
import { Product } from "./product.model";

export class Item{
    id: number;
    name: string;
    priority: number;
    quantity: number;
    hexColor: string;
    itemInProduct: ItemInProduct;
    price: number;
    supplyType: string = 'G';
    productList: Product[];

    constructor(){}
}