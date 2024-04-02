import { Component, inject } from '@angular/core';
import { Produsts } from '../produsts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searching: string = ''
  filterProductList: Produsts[] = []

  product: any[] = [];

  productService: ProductsService =inject(ProductsService)
  constructor() {
    this.productService.getAllProductList().subscribe(data =>{
      this.product = data
      this.filterProductList = this.product;
    })


  }

  filterResults() {
    console.log(this.searching)
    if (!this.searching) {
      this.filterProductList = this.product
    }
    this.filterProductList = this.product.filter(
      list => list?.productName.toLowerCase().includes(this.searching.toLowerCase())
    )
  }
}
