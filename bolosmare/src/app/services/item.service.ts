import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDTO } from '../dto/itemDTO.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http:localhost:8080'
    }),
  };


  //adicionar o valor unitario para cada item e sua respectiva quantidade/tipo
  //quando for adicionar uma receita, fazer uma regra de 3 pra sugerir um valor pra Ellen na hora de adicionar cada Item na receita.
  

  baseUrl = 'http:localhost:8080/items';

  constructor(private http: HttpClient) { }

  create(itemDTO: ItemDTO): Observable<ItemDTO>{
    return this.http.post<ItemDTO>('http://localhost:8080/items', itemDTO);
  }

  update(id: number, itemDTO: ItemDTO): Observable<ItemDTO>{
    return this.http.put<ItemDTO>('http://localhost:8080/items/' + id, itemDTO);
  }

  findAll(): Observable<Item[]>{
    return this.http.get<Item[]>('http://localhost:8080/items');
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/items/' + id);
  }
}
