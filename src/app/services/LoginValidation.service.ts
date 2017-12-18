import {Injectable} from '@angular/core'

@Injectable()

export class loginValidator{
   

    validateCredentials(LoginDetails:any){
        if(LoginDetails.userName==='admin'&&LoginDetails.userPassword==='admin'){
            console.log("User Validated");
            return true;
        }
        else{
            return false;
        }
    }
    
}