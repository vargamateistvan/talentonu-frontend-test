import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../common/services/globals.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchInput = ""
  errorMessage = null

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
    this.errorMessage = document.getElementById('error-msg')

    this.globals.selectedLanguage = localStorage.getItem('selectedLanguage');
    console.log("SELECTED LANG", this.globals.selectedLanguage)
    
    if (!this.globals.selectedLanguage) {
      this.globals.selectedLanguage = this.globals.defaultLanguage
      localStorage.setItem("selectedLanguage", this.globals.defaultLanguage)
    }
  }

  changeLanguage(language: string) {
    this.globals.selectedLanguage = language
    localStorage.setItem("selectedLanguage", language)
  }

  onSearch(value: string) {
    console.log("ONSEARCH", value)
    if (value === "") {
      return
    }

    if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(value)) {
      return this.errorMessage.style.height = '30px'
    }

    this.errorMessage.style.height = '0px'
    this.globals.searchValue = value
  }
}
