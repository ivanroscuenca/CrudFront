import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  
  id!:number;
  product!:Product;
  constructor(private productService: ProductService,private router:Router,private activatedRoute:ActivatedRoute){}

ngOnInit():void {
  this.getProduct();
}

onUpdate():void{
  this.productService.update(this.id,this.product).subscribe(
    data => {
      console.log('Product updated properly ');
      this.router.navigate(['']);
    },
    err =>{
      console.error('An error occurred:', err);
    }
  );
}

  getProduct():void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.detail(this.id).subscribe(
      data =>{
    this.product = data;
    console.log(this.product);
      },
      err=>{
        console.error('An error occurred:', err);
        this.router.navigate(['']);
      }
    )
  }
}
