import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //inyectamos las url del back 

  productURL = environment.apiRestURL+"/product";

  //inyectamos el cliente en el constructor
  constructor(private httpClient:HttpClient) { }

  //devolvemos los metodos del back
  public list(): Observable<Product[]>{
    return  this.httpClient.get<Product[]>(this.productURL);
  }
  public detail(id:number): Observable<Product[]>{
    return  this.httpClient.get<Product[]>(this.productURL);
  }


}
