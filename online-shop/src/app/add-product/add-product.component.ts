import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { productList } from '../product/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private  route:ActivatedRoute) {
    this.products = [
    ]
   }

  // about1:any;
  ngOnInit(): void {
    // this.about1 = this.route.snapshot.params['foo'];
  }


  products: productList[];
  selected: string = '';
  fileToUpload: any = null;
  sku: number = 0;

  fileUpload(event: any) :void{
    this.fileToUpload = event.target.value;
  }

  selctElement(event: any):void{
    this.selected = event.target.value;
    // console.log(this.selected)
  }

  addInfo(productName: HTMLInputElement, productPrice: HTMLInputElement): boolean{
    // console.log( `${productName.value} +  ${productPrice.value} + ${this.selected}`);
    this.sku += 13;
    this.products.push(new productList(productName.value, productPrice.value, 
      this.selected,  this.sku, this.fileToUpload));
    console.log(this.products);
    productName.value = "";
    productPrice.value = "";
    return false;
  }
}
