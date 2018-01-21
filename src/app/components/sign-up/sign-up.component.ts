import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username = '';
  password = '';
  ConfirmPassword = '';
  // emailaddress = '';
  // birthdate = '';
  // zipcode = '';

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  signup(){
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    localStorage.setItem('ConfirmPassword', this.ConfirmPassword );
    // localStorage.setItem('emailaddress', this.emailaddress);
    // localStorage.setItem('birthdate', this.birthdate);
    // localStorage.setItem('zipcode', this.zipcode);
    
    if( this.username != '' && this.password != '' && this.ConfirmPassword != '' 
    //&& this.emailaddress != '' && this.birthdate != '' && this.zipcode != ''
  ){
      this.router.navigate(['profile']);
    }
  }
}
