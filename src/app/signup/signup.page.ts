import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { regexValidators } from '../common/validators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm = new FormGroup({
    email : new FormControl('', Validators.compose([Validators.pattern(regexValidators.email), Validators.required])),
    password : new FormControl(),
    confirmPassword : new FormControl()
  });

  constructor(private afAuth: AngularFireAuth) {  }

  ngOnInit() {
  }

  public async register(){
    if(this.signUpForm.get('password').value !== this.signUpForm.get('confirmPassword').value){
      return console.log("tPasswords doný match");
    }

    try{
      const newUser = await this.afAuth.auth.createUserWithEmailAndPassword(this.signUpForm.get('email').value, this.signUpForm.get('password').value); 
      console.log(newUser);
    }catch(errr){
      console.dir(errr);
    }
  }

}
