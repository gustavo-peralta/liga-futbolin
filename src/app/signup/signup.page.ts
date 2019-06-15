import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { regexValidators } from '../common/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      email : new FormControl('', Validators.compose([Validators.pattern(regexValidators.email), Validators.required])),
      password : new FormControl()
    });
  }

  ngOnInit() {
  }

}
