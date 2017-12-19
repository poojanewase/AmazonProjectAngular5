import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import{Router}from '@angular/router'
import{loginValidator} from 'D:/AmazonApp/src/app/services/LoginValidation.service'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers:[loginValidator]
  //styleUrls: ['./app.component.css']
})



export class loginComponent {
  title = 'Login';

  //wrongPassword="false";
 constructor(private router:Router,private loginValidatorObj:loginValidator){};
   LoginForm=new FormGroup({

    userName :new FormControl(""),
    userPassword : new FormControl(""),
  })
  

  //LoginDetails:any;
  

  userLogin(){
    console.log(this.LoginForm.value);
    if(this.loginValidatorObj.validateCredentials(this.LoginForm.value)){
        this.router.navigate(['/dashboard']);
    }
    else{
       alert("Password you entered is incorrect");
       this.LoginForm.reset();
    }
  }


}
