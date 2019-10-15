import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {

  public cart:any[]=[];
  constructor(private _http:HttpClient) { }

  public addItem(id:any){
    this.cart.push(id);
  }
  public getItems():any[]{
      return this.cart;
  }
  getShippingPrices() {
    return this._http.get('/assets/shipping.json');
  }

  public clearCart(){
    this.cart=[];
  }
}