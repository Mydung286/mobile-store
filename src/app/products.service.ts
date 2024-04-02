import { Injectable } from '@angular/core';
import { Produsts} from './produsts';
import{HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  protected  productsList: Produsts[] = []

  
  constructor(private http: HttpClient) {
    this.getAllProductList().subscribe(res => {
      this.productsList =res
    })
  }

// getAutoId() {
//   var max = 1;
//   this.productsList.forEach((item) => {
//     if (item.id > max)
//     max = item.id;
//   });
//   return max+1;
// }
private URL =`http://localhost:3000/product`
  getAllProductList(): Observable<Produsts[]> {
    return this.http.get<Produsts[]>(`${this.URL}`)
  }
  getProduct() {
    return this.productsList;
  }
  getProductId(id: number) {
    return this.http.get<Produsts>(`${this.URL}/${id}`)
  }


  AddProduct(frmProduct: any): Observable<Produsts[]>{
    return this.http.post<Produsts[]>(`${this.URL}`, frmProduct)
    // console.log(this.productsList);
  }
  // EditProduct(index: number) {
  //   return this.productsList[index];
  // }
  UpdateProduct(id: number, frmProduct: any): Observable<Produsts[]>{
    return this.http.put<Produsts[]>(`${this.URL}/${id}`, frmProduct)
  }
  DeleteProduct(id: number) : Observable<Produsts[]> {
    return this.http.delete<Produsts[]>(`${this.URL}/${id}`)
  }
}
