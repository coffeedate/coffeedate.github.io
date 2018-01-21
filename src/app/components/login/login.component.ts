import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  error = '';
  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
  }

  login(){
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    if(this.username != '' && this.password != '') {
      this.ApiService.getUser(this.username, this.password).subscribe(
        (data) => {
          console.log(data)
          if(data['_body'] == '"bamboozle"'){
            this.error = 'bamboozle'
          } else {
            console.log(
            'gest her'
            )
            let body = JSON.parse(data['_body']);
            localStorage.setItem('name', body.name);
            localStorage.setItem('description', body.description);
            localStorage.setItem('picture', body.picture);
            localStorage.setItem('interests', body.interests);
            this.router.navigate(['finding']);
          }
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }

  signUp(){
    // localStorage.setItem('username', this.username);
    // localStorage.setItem('password', this.password);
    // if(this.username != '' && this.password != '') {
    //   this.router.navigate(['survey']);
    // }
    this.router.navigate(['signup'])
  }

}
