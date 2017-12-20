import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{productDescription} from 'D:/AmazonApp/src/app/services/productDescription.service';
import { Console } from '@angular/core/src/console';
import{enableProdMode}from '@angular/core'

@Component({
  selector: 'viewProduct',
  templateUrl: './viewPage.component.html',
styleUrls: ['./viewPage.component.css'],
providers:[productDescription]

})
export class viewProductComponent {
  title = 'Product Description';

  id="";
  productArray:any;
  constructor(private activatedRouteObj:ActivatedRoute, private productDescriptionObj:productDescription){};
  
  ngOnInit(){
          this.id=this.activatedRouteObj.snapshot.params['id'];


        console.log("Received parameter : ",this.id);
        this.productArray=this.productDescriptionObj.getProductObj(this.id);
    console.log("Object recieved in component :",this.productArray);
  }


}
