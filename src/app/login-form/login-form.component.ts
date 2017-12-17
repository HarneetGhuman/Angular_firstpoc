import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   error = '';
   username_error = '';
   password_error = '';
   //remainder:boolean =false;

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
    if(username == ''){
      this.username_error='Username cannot be left blanked';
      alert(this.username_error);
    }
    else if(password == ''){
      this.password_error='Password cannot be left blanked';
      alert(this.password_error);
    }

  	else if(username == 'admin' && password == 'admin'){
     // this.remainder=true;
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);}
       else {
                    this.error = '* Username or password is incorrect';
                    //this.loading = false;
                }
  	
  }
}