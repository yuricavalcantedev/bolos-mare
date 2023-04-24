import { ItemInProduct } from "./itemInProduct.model";
import { Order } from "./order.model";

export class Product{

    id: number;
    name: string;
    price: number;
    itemsList: ItemInProduct[] = [];
    orderList: Order[] = [];

    constructor(){}

}