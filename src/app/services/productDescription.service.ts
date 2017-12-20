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
            description: "Headphones made for EDM 30mm closed dynamic driver unit for powerful extra bass sound"            ,
            mainimg:"assets/images/5t.jpg",
        },
        {
            id: "product2",
            name: "Caprese HandBag",
            price: 1299,
            description: "Headphones made for EDM 30mm closed dynamic driver unit for powerful extra bass sound"            ,
            mainimg:"assets/images/bag.jpg",
        },
        {
            id: "product3",
            name: "Bean Bag",
            price: 3299,
            description: "Headphones made for EDM 30mm closed dynamic driver unit for powerful extra bass sound"            ,
            mainimg:"assets/images/beanbag.jpg",
        },
       
        {
            id: "product4",
            name: "Women's Jacket",
            price: 3299,
            description: "Headphones made for EDM 30mm closed dynamic driver unit for powerful extra bass sound"            ,
            mainimg:"assets/images/jackets.jpg",
        },
        {
            id: "product5",
            name: "One Plus 5t",
            price: 33599,
            description: "Headphones made for EDM 30mm closed dynamic driver unit for powerful extra bass sound"            ,
            mainimg:"assets/images/oneplus.jpg",
        },
        
    ]

    getProductObj(id:string){
        return this.productArray.filter(x=>x.id===id);
    }

    getProductArray(){
        return this.productArray;
    } 
}