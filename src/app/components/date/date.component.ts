import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeHome(){
    this.router.navigate(['finding']);
  }

  routeLogin(){
    this.router.navigate(['login']);
  }

}
