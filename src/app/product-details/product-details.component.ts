import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Produsts } from '../produsts';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: Produsts | undefined;
  constructor(private router: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    let id = Number(this.router.snapshot.params['id'])
   this.productService.getProductId(id).subscribe(data => {
    this.productDetail=data
    })
  }

}
