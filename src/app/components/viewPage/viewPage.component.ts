import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{productDescription} from 'D:/AmazonApp/src/app/services/productDescription.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'viewProduct',
  templateUrl: './viewPage.component.html',
styleUrls: ['./viewPage.component.css'],
providers:[productDescription]

})
export class viewProductComponent {
  title = 'Product Description';

  id="";
  productObj:any;
  constructor(private activatedRouteObj:ActivatedRoute, private productDescriptionObj:productDescription){};
  ngOnInit(){
      this.id=this.activatedRouteObj.snapshot.params['id'];


      console.log("Received parameter : "+this.id);
      this.productObj=this.productDescriptionObj.getProductObj(this.id);
    console.log("Object recieved",this.productObj);
  }

setData(){  
    
    document.getElementById("mainImage").src="assets/images/5t.jpg";
    document.getElementById("line1").innerHTML="Dimensions (In Inches): H 27.6 X W 65 X D 30.3; Seating Height - 14.8";
}
}
