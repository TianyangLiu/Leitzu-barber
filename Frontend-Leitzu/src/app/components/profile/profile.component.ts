import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user_name: string;

  constructor() { }

  ngOnInit() {
    this.user_name = this.getUserName();
  }

  getUserName(){
    return localStorage.getItem('user_name');
  }
}
