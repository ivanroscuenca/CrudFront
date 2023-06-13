import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product:Product | undefined;
  constructor(private productService: ProductService,private router:Router,private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.getProduct();
  }

  getProduct():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.detail(id).subscribe(
      data =>{
this.product = data;
      },
      err=>{
        console.error('An error occurred:', err);
        this.router.navigate(['']);
      }
    )
  }
}
