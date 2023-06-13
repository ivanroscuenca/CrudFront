import { Component,OnInit } from '@angular/core';
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

onDelete(id: number): void {
  // Call the delete method in the ProductService
  this.productService.delete(id).subscribe(
    () => {
      // Remove the deleted product from the products array
      this.products = this.products.filter(product => product.id !== id);
      
      // Display a success notification or perform any other action
      console.log(`Product with ID ${id} has been deleted successfully.`);
    },
    err => {
      console.error('An error occurred while deleting the product:', err);
    }
  );
}


}