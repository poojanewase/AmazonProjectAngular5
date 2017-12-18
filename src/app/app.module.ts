import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import{loginComponent} from 'D:/AmazonApp/src/app/components/loginPage/login.component'
import{dashboardComponent}from 'D:/AmazonApp/src/app/components/dashboardPage/dashboard.component'
import{RouterModule} from '@angular/router'
import{routingComponent} from 'D:/AmazonApp/src/app/components/RoutingComponent/routing.component'
import{headerComponent} from 'D:/AmazonApp/src/app/components/headerPage/header.component'

@NgModule({
  declarations: [
    AppComponent,loginComponent,dashboardComponent,routingComponent,headerComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot([{path:'',component:routingComponent},{path:'dashboard',component:dashboardComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
