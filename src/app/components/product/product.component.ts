import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
    console.log("P", this.product)
  }

}
