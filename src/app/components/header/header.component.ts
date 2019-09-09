import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../common/services/globals.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
    this.globals.selectedLanguage = localStorage.getItem('selectedLanguage');
    console.log("SELECTED LANG", this.globals.selectedLanguage)
    
    if (!this.globals.selectedLanguage) {
      this.globals.selectedLanguage = this.globals.defaultLanguage
      localStorage.setItem("selectedLanguage", this.globals.defaultLanguage)
    }
  }

  changeLanguage(language) {
    localStorage.setItem("selectedLanguage", language)
  }

}
