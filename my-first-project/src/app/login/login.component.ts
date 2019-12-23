import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  
  invalidMsg='Invalid Credentials';
  invalidLoginFlag=false;
  constructor(private router: Router,private auth:AuthenticationService) { } //instanse fro router class is created and sended to constructor

  ngOnInit() {
  }
  login(){
    console.log(this.username+' '+this.password);
    alert("Welcome");
    if(this.auth.authenticate(this.username,this.password)){
          this.invalidLoginFlag=false;
          this.router.navigate(['register']); //input should be passed as an array
    }
    else{
      this.invalidLoginFlag=true;
    }
  }

}
