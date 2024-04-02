import { Component, Input } from '@angular/core';
import { Produsts } from '../produsts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() productHome: Produsts[] = []
}
