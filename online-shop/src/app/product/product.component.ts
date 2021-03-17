import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { productList } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputVal!: productList[];

  // add(){
  //   this.inputVal;
  // }
  constructor(private  route:ActivatedRoute) { }

  // goToComponentB(): void {
  //   this.stateService.data = {...};
  //   this.router.navigate(['/b']);
  // }
  contact1:any;
  ngOnInit(): void {
    this.contact1 = this.route.snapshot.params['foo'];
  }



}
