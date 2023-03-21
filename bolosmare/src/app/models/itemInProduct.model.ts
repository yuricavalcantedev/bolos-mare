import { Item } from "./item.model";
import { Product } from "./product.model";

export class ItemInProduct{
    
    id: number;
    item: Item;
    quantity: number;
    price: number;
    product: Product;

    constructor(){}
}