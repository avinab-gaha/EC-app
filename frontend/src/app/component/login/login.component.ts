import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  submitted = false;
  errorMessage: any = '';
  constructor() { }
  ngOnInit(): void {
    this.saveData();
  }

  saveData() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      // this.errorMessage = this.showErrorMessage('email') || this.showErrorMessage('password');
      console.log(this.errorMessage);
      debugger;
    }
    else {
      console.log("logged in");
    }
  }

  // showErrorMessage(controlName: string) {

  //   if (!this.loginForm.get(controlName)?.touched || !this.loginForm.controls.email.errors || !this.loginForm.controls.password.errors) {
  //     return "";
  //   }
  //   if (controlName === 'email') {
  //     console.log('email');
  //   }
  //   else if (controlName === 'password') {
  //     console.log('password');
  //   }
  // }
}
