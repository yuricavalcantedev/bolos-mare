import { Product } from "./product.model";

export class Order{
    id: number;
    eOrderStatus: string;
    createdDate: Date;
    updatedDate: Date;
    productList: Product[];
    totalAmount: number;
    note: string;
    
    constructor(){}
}