import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(private user: UserService, private token: TokenService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.user.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.setUserName(data.user_name);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error){
    this.error = error.error.error;
  }

  setUserName(name){
    localStorage.setItem('user_name', name);
  }

}
