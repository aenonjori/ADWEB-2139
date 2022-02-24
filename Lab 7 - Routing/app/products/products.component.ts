import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  product1:string = "assets/product1.png";
  product2:string = "assets/product2.png";
  product3:string = "assets/product3.png";
  product4:string = "assets/product4.png";
  product5:string = "assets/product5.png";
  product6:string = "assets/product6.png";
  product7:string = "assets/product7.png";
  product8:string = "assets/product8.png";
 
  constructor() { }

  ngOnInit(): void {
  }

}