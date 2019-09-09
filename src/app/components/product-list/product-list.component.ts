import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../common/services/globals.service'

import HUchairs from '../../../assets/data/hu/chairs.json'
import ENchairs from '../../../assets/data/en/chairs.json'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  chairs = []

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
    this.chairs = this.getChairs()
  }

  getChairs() {
    const lang = this.globals.selectedLanguage.split("-")[1]

    switch (lang) {
      case 'HU': {
        return HUchairs.data
      }

      case 'EN': {
        return ENchairs.data
      }

      default: {
        return HUchairs.data
      }
    }
  }
}
