import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { regexValidators } from '../common/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([ Validators.pattern(regexValidators.email), Validators.required])),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  public logIn(){}

  public signUp(){
    this.router.navigateByUrl("/signup");
  }

}
