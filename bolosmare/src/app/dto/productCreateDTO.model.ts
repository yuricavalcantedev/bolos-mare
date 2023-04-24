import { Item } from "../models/item.model";
import { ItemInProduct } from "../models/itemInProduct.model";

export class ProductCreateDTO{

    id: number;
    name: string;
    price: string;
    itemsList: ItemInProduct[] = [];

    constructor(){}
}