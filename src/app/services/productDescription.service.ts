import {Injectable} from '@angular/core'
import { forEach } from '@angular/router/src/utils/collection';
import { Console } from '@angular/core/src/console';

@Injectable()

export class productDescription{
   
    productArray:any=[
        {
            id: "product1",
            name: "Sony Headset",
            price: 3299,
            description: ["Headphones made for EDM 30mm closed",
                 "dynamic driver unit for powerful extra bass sound"]
            ,
            imagelist: {
                mainimg:"assets/images/5t.jpg",
                img1:"assets/images/5t.jpg",
                img2:"assets/images/5t.jpg",
                img3:"assets/images/5t.jpg",
                img4:"assets/images/5t.jpg"
            }
        },
        
    ]

    getProductObj(id){
      this.productArray.forEach(element => {
          if(element.id===id){
        
            return element;
          }
      });
    }

    
    
}