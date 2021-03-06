import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { RegisterModel } from '../models/register-model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    @Inject('ApiRoot') private apiRoot,
    private http: HttpClient,
    private router: Router
  ) { }

  checkUser(): any {
    const responseString = localStorage.getItem('token_response');
    const responseJSON = JSON.parse(responseString);
    return responseJSON;
  }
  
  login(model: LoginModel){
    let body = `grant_type=password&username=${model.Email}&password=${model.Password}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(`${this.apiRoot}/Token`, body, {headers: headers}).subscribe(val => {
      let responseString = JSON.stringify(val);
      localStorage.setItem('token_response', responseString);
      console.log(val);
      this.router.navigate(['/movie/list']);
    })
  }

  register(model: RegisterModel){
    let cred = `Email=${model.Email}&password=${model.Password}&confirmpassword=${model.ConfirmPassword}`;
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(`${this.apiRoot}/api/Account/Register`, cred, {headers:header}).subscribe( val => {
      console.log(val);
    })
  }
}
