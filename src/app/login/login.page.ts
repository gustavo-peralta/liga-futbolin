import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { regexValidators } from '../common/validators';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([ Validators.pattern(regexValidators.email), Validators.required])),
    password: new FormControl()
  });
  
  constructor(private router: Router, private afAuth: AngularFireAuth) {  }

  ngOnInit() {
  }

  public async logIn(){
    try{
      const res = this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }catch(err){
      console.dir(err);
    }
  }

  public signUp(){
    this.router.navigateByUrl("/signup");
  }

}
