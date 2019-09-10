import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../classes/product';

@Pipe({
  name: 'productFilter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], filteredValue?: string): Product[] {
    if (!products || !filteredValue) {
      return products.filter(product => product.visible)
    }

    return products.filter((product) => {
      return product.visible 
        && (product.title.toLowerCase().includes(filteredValue.toLowerCase()) 
        || product.category === parseInt(filteredValue) 
        || product.description.toLowerCase().includes(filteredValue.toLowerCase()))
    });
  }

}
