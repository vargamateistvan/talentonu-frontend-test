import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../common/services/globals.service'

import HUProducts from '../../../assets/data/hu/chairs.json'
import ENProducts from '../../../assets/data/en/chairs.json'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
    this.products = this.getProducts()
  }

  getProducts() {
    const lang = this.globals.selectedLanguage.split("-")[1]

    switch (lang) {
      case 'HU': {
        return HUProducts.data
      }

      case 'EN': {
        return ENProducts.data
      }

      default: {
        return HUProducts.data
      }
    }
  }
}
