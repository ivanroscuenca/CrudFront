import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
//creamos array
products : Product[] = [];

constructor(private productService: ProductService){}

ngOnInit():void{
  this.getProducts();
}

getProducts(): void {
this.productService.list().subscribe(
  data =>{
    this.products = data;
    console.log(this.products);

  },
  err=>{
    console.error('An error occurred:', err);
    
  }
);
}


}
