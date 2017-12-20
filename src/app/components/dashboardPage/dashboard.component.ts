import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{productDescription} from 'D:/AmazonApp/src/app/services/productDescription.service'

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  providers:[productDescription]

})
export class dashboardComponent {
  constructor(private router:Router,private productDescriptionObj:productDescription){};
  productArray:any=[];
  ngOnInit(){
      this.productArray=this.productDescriptionObj.getProductArray();
      console.log(this.productArray);
  }
  
   onViewPage(id:string){
        console.log(id);
    this.router.navigate(['/viewproduct',id]);
  }
}
