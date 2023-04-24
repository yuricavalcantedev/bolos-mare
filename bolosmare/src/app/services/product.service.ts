import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCreateDTO } from '../dto/productCreateDTO.model';
import { ProductDTO } from '../dto/productDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http:localhost:8080'
    }),
  };


  //adicionar o valor unitario para cada item e sua respectiva quantidade/tipo
  //quando for adicionar uma receita, fazer uma regra de 3 pra sugerir um valor pra Ellen na hora de adicionar cada Item na receita.
  

  baseUrl = 'http:localhost:8080/products';

  constructor(private http: HttpClient) { }

  create(productDTO: ProductCreateDTO): Observable<ProductCreateDTO>{
    return this.http.post<ProductCreateDTO>('http://localhost:8080/products', productDTO);
  }

  findAll(): Observable<ProductDTO[]>{
    return this.http.get<ProductDTO[]>('http://localhost:8080/products');
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/products/' + id);
  }
}
