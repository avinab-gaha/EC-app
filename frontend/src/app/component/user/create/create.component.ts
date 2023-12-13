import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public userForm !: FormGroup;
  submitted = false;
  name: string = "";
  email: string = "";
  password: string = "";
  errorMessage: string = "";
  constructor(private router: Router, private user: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  createUserData() {
    this.user.addUserData(this.userForm.value).subscribe((res: any) => {
      if (this.userForm.valid) {
        this.userForm.patchValue(res);
        this.submitted = true;
        console.log(res);
      }
      else {
        this.errorMessage = this.showErrorMessage("email") || this.showErrorMessage("password");
      }
    });
  }

  backtoUsers() {
    this.router.navigate(['users']);
  }

  showErrorMessage(controlName: string) {
    // if (!this.submitted) {
    //   return "";
    // }
    let fieldLabel: any = {
      'email': "Email",
      'password': "Password"
    }
    let errors: any = this.userForm.controls[controlName].errors;

    if (!this.userForm.get(controlName)?.touched || !errors) {
      return "";
    }
    let message: string = "";
    if (errors.required) {
      message = fieldLabel[controlName] + " field must not be blank.";
    }
    else if (errors.email) {
      message = fieldLabel[controlName] + " must be of type email (RFC 101)";
    }
    return message;
  }
}
