import { Injectable } from '@angular/core';
import * as environment from '../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';


const urlBase = environment.environment.api

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  async getAll(): Promise<Product[]>{
    return this.http.get(urlBase+'product/get').toPromise() as Promise<Product[]>
  }

  async getDetailed(id: string): Promise<Product>{
    return this.http.get(urlBase+'product/get/'+id).toPromise() as Promise<Product>
  }

  async getFiltered(param: string, val: string): Promise<Product[]>{
    return this.http.get(urlBase+'product/get/'+param+'/'+val).toPromise() as Promise<Product[]>
  }

  async edit(id: string, input: Product): Promise<Product>{
    return this.http.post(urlBase+'product/edit/'+id, input).toPromise() as Promise<Product>
  }

  async delete(id: string): Promise<Product>{
    return this.http.get(urlBase+'product/delete/'+id).toPromise() as Promise<Product>
  }
}
