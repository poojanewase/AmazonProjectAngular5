import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validator,Validators } from '@angular/forms';
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

 constructor(private router:Router,private loginValidatorObj:loginValidator){};
   LoginForm=new FormGroup({

    userName :new FormControl(null,[Validators.required, Validators.minLength(5)]),
    userPassword : new FormControl(null,[Validators.required, Validators.minLength(5)]),
  })
  
  userLogin(){
    //console.log(this.LoginForm.value);
    if(this.loginValidatorObj.validateCredentials(this.LoginForm.value)){
        this.router.navigate(['/dashboard']);
    }
    else{
       alert("Password you entered is incorrect");
       this.LoginForm.reset();
    }
  }

}
