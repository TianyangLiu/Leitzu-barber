import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  public success_message: string;

  public error = [];

  public user_role: string;

  constructor(private user: UserService, private token: TokenService, private router: Router, private auth: AuthService) { }

  ngOnInit() { }

  onSubmit(){
    this.user.signup(this.form).subscribe(
      data => this.handleResponse(),
      error => this.handleError(error)
    );
  }

  handleResponse(){
    this.success_message = "创建成功";
    this.error = [];
  }

  handleError(error){
    this.error = error.error.errors;
  }

  back(){
    this.success_message = null;
    this.form = {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    }
  }
}
