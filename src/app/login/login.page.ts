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
    password: new FormControl('', Validators.compose( [Validators.minLength(6), Validators.required] ))
  });
  
  constructor(private router: Router, private afAuth: AngularFireAuth) {  }

  ngOnInit() {
  }

  public async logIn(){
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value);
      this.router.navigateByUrl('/home');
    }catch(err){
      console.log(err.code);
      console.dir(err);
    }
  }

  public signUp(){
    this.router.navigateByUrl("/signup");
  }

}
