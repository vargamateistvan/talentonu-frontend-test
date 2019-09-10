import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  defaultLanguage = "lang-HU"
  selectedLanguage = ""
  searchValue = ""

  setSelectedLanguage(language: string) {
    this.selectedLanguage = language
  }

  getSelectedLanguage(): string {
    return this.selectedLanguage
  }

  setSearchValue(value: string) {
    this.searchValue = value
  }

  constructor() { }
}
