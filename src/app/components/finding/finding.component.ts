import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent implements OnInit {

  name = '';
  username = '';
  password = '';
  matches = [];
  error = '';
  isMatches = false;

  userList = [];
  likedList = [];
  arr = Array.from({length: this.userList.length}, (x,i) => i);
  name: any = localStorage.getItem('username') || 'YOUR_NAMES';
  constructor( private ApiService: ApiService , private router: Router) { 
    this.getMatches();
    this.getUsers();
  
  }

  ngOnInit() {
  }

  getUsers(){
    this.name = localStorage.getItem('name');
    this.ApiService.getAllUsers(this.name).subscribe(
      (data) => {
        // console.log(data);
        let body = JSON.parse(data['_body']);

        for(let item in body){
          // console.log(item)

          if(this.name != body[item].name)
            this.userList.push(body[item]);
        }

        this.arr = Array.from({length: this.userList.length + 1}, (x,i) => i);
        // console.log(this.userList)
      }, 
      (err) => {
        console.log(err);
      }
    )
  }

  like(i) {
    this.likedList.push[i];
    let userA = localStorage.getItem('name');
    let userB = this.userList[i].name;
    this.ApiService.like(userA, userB).subscribe(
      (data) =>{
        if(data['_body'] == '"You have a match!"'){
          this.getMatches();
          //let arr = [userA, userB];
          //arr = arr.sort();
          //this.router.navigate(['date', { room: arr[0] + arr[1] }]);
        }
        console.log(data)
      }, 
      (err) =>{
        console.log(err)
      }
    )
  }

  routeToCam(userB){
    let userA = localStorage.getItem('name');
    let arr = [userA, userB];
    arr = arr.sort();
    this.router.navigate(['date', { room: arr[0] + arr[1] }]);
  }

  getMatches(){
    this.username = localStorage.getItem('username');
    this.password = localStorage.getItem('password');

    if(this.username != '' && this.password != '') {
      this.ApiService.getUser(this.username, this.password).subscribe(
        (data) => {
          if(data['_body'] == '"bamboozle"'){
            this.error = 'bamboozle'
          } else {
            console.log(
            'gest her'
            )
            let body = JSON.parse(data['_body']);
            console.log("YEEE");
            console.log(body);
            this.matches = body.matches;
            if(this.matches.length > 0)
              this.isMatches = true;
            else
              this.isMatches = false;
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  routeLogin(){
    this.router.navigate(['login']);
  }

}
