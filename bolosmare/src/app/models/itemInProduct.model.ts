import { Item } from "./item.model";
import { Product } from "./product.model";

export class ItemInProduct{

    id: number;
    item: Item = new Item();
    product: Product = new Product();
    price: number;
    quantity: number;

    constructor(){

    }
}