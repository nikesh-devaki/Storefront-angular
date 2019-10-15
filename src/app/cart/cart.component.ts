import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import {products} from '../products'
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any[];
  products:any;
  checkoutForm:any;
  constructor(
    private cartservice:CartService,
    private _fb:FormBuilder
  ) { }

  ngOnInit() {
    this.cart=this.cartservice.getItems();
    this.products=products;
    console.log(this.cart);
    this.checkoutForm=this._fb.group({
      name:'',
      address:''
    });
  }
  public onSubmit(){
    console.log("Order placed");
    this.cart=[];
    this.cartservice.clearCart();
    this.checkoutForm.reset();
  }

}