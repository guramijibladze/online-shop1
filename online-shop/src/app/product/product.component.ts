import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
