import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ActivatedRoute} from '@angular/router'

import { AppComponent } from './app.component';
import{loginComponent} from 'D:/AmazonApp/src/app/components/loginPage/login.component'
import{dashboardComponent}from 'D:/AmazonApp/src/app/components/dashboardPage/dashboard.component'
import{RouterModule} from '@angular/router'
import{routingComponent} from 'D:/AmazonApp/src/app/components/RoutingComponent/routing.component'
import{headerComponent} from 'D:/AmazonApp/src/app/components/headerPage/header.component'
import{viewProductComponent}from 'D:/AmazonApp/src/app/components/viewPage/viewPage.component'

@NgModule({
  declarations: [
    AppComponent,loginComponent,dashboardComponent,routingComponent,headerComponent,viewProductComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([{path:'',component:routingComponent},
    {path:'dashboard',component:dashboardComponent},
    {path:'viewproduct/:id',component:viewProductComponent,pathMatch: 'full'},

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
