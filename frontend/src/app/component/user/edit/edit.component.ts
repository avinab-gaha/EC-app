import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  errorMessage: string = "";
  submitted = false;
  editPerson = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private user: UserService, private rout: Router) { }
  ngOnInit(): void {
  }
  editUserData() {
    const useridString = this.router.snapshot.params['id'];
    const userid = parseInt(useridString);
    this.user.updateUserData(userid, this.editPerson.value).subscribe((res: any) => {
      this.editPerson.patchValue({
        name: res.name,
        email: res.email,
        password: res.password,
      });
      debugger;
    })
  }


  // editUserData() {
  //   // console.log(this.editPerson.value);
  //   this.user.updateUserData(this.router.snapshot.params['id'], this.editPerson.value).subscribe((res) => {
  //     // if (this.editPerson.valid) {
  //     //   this.editPerson.reset();
  //     // }
  //     console.log(res);
  //   });
  // }

  backtoUsers() {
    this.rout.navigate(['users']);
  }
}
