import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticate(username,password){
   // console.log('before:  '+this.isUserLoggedIn());
    if(username==='Gayathri'&& password==='abc@123'){
          sessionStorage.setItem('authenticatedUser',username);
       //   console.log('before:  '+this.isUserLoggedIn());
          return true;
    }
    
     return false;
  }

  constructor() { }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
