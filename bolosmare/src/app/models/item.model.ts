import { Product } from "./product.model";

export class Item{
    id: number;
    name: string = '';
    quantity: number;
    price: number;
    hexColor: string = '#FFFFFF';
    supplyType: string = 'G';
    productList: Product[];

    constructor(){}
}