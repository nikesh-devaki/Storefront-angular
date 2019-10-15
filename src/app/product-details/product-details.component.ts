import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';
//import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  public id:any;
  public addedToCart=false;
  constructor(
    private route:ActivatedRoute,
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      console.log(params);
      this.product=products[params.get('productId')];
      this.id=params.get('productId');
    });
  }

  public addToCart(){
    this.cartService.addItem(this.id);
    this.addedToCart=true;
    window.alert('Your product has been added to the cart!');
  }

}