import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id = 0
  title = ""
  category = 0
  description = ""
  visibility = false

  constructor(product: Product) {
    // this.id = product.id
    // this.title = product.title
    // this.description = product.description
    // this.visibility = product.visible
  }

  ngOnInit() {
  }

}
