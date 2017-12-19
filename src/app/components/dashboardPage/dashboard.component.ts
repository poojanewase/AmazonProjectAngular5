import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{productDescription} from 'D:/AmazonApp/src/app/services/productDescription.service'

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  providers:[productDescription]

})
export class dashboardComponent {
  title = 'Dashboard';

  constructor(private router:Router,private productDescriptionObj:productDescription){};

  
   onViewPage(id:string){
      // var target=event.srcElement;
      //  this.id=target.attributes.id;
       console.log(id);
      
    this.router.navigate(['/viewproduct',id]);
  }
}
