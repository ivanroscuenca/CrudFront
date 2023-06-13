import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  name!:string;
  price!:number;
  constructor(private productService: ProductService,private router:Router){}

  onCreate():void{
const product = new Product(this.name,this.price);
this.productService.create(product).subscribe(
  data => {
    console.log('Product added properly ');
    this.router.navigate(['']);
  },
  err =>{
    console.error('An error occurred:', err);
  }
)
  }
}
