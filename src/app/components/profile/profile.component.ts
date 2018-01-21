import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Name = ''
  Description = ''
  Interest = ''
  Avatar = ''
  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
  }

  submit(){
    if( this.Name != '' && this.Description != '' && this.Interest != '' && this.Avatar != ''){
      localStorage.setItem('name', this.Name);
      localStorage.setItem('description', this.Description);
      localStorage.setItem('picture', this.Avatar);
      localStorage.setItem('interests', this.Interest);
      this.router.navigate(['survey'])
     
    }
  }
}