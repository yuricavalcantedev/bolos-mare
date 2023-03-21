import { ItemInProduct } from "./itemInProduct.model";
import { Order } from "./order.model";

export class Product{

    id: number;
    name: string;
    description: string;
    price: number;
    itemInProductList: ItemInProduct[];
    orderList: Order[];

    constructor(){}

}