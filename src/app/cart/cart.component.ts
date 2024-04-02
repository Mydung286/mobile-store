import { Component } from '@angular/core';
import { Produsts } from '../produsts';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productDetail: Produsts | undefined
  cartList: Cart[] = []
  InStock: number = 0
  constructor(private router: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService) {
    this.cartList = cartService.getCartAll()
  }
  ngOnInit(): void {
    let id = Number(this.router.snapshot.params['id'])
   this.productService.getProductId(id).subscribe(data => {
    this.productDetail = data
   })
    this.InStock = this.productDetail?.inStock!
  }
  Add() {
    this.cartService.addCart(this.productDetail?.id!, this.productDetail)
    this.InStock = this.cartService.getInStock(this.productDetail?.id!)!
  }
  ItemCount() {
    return this.cartService.totalItems()
  }
  ItemSum() {
    return this.cartService.Total()
  }
  Remove(index: number) {
    this.cartService.RemoveCart(index)
  }
  DeleteAll() {
    this.cartService.DeleteAllCart()
  }
}
