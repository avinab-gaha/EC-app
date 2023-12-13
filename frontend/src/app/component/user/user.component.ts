import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private user: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.showUserData();
  }

  showUserData() {
    this.user.getUserData().subscribe((res: any) => {
      this.users = res.data;
    })
  }

  goToUserData() {
    this.router.navigate(['users/create']);
  }

  editPersonbyId(id: number, data: any) {
    const numidString = this.route.snapshot.params['id'];
    const numid = parseInt(numidString);
    if (!isNaN(numid)) {
      this.user.updateUserData(numid, data).subscribe((res: any) => {
        this.users = res.data;
      },
        (error) => {
          console.error('error updating user data', error);
        }
      );
      this.router.navigate(['users/edit', numid]);
    }
  }


  viewPersonbyId(id: number) {
    let numid = this.route.snapshot.params[id];
    this.user.viewUserData(numid).subscribe((res: any) => {
      this.users = res.data;
      // console.log(this.userData);
    })
    this.router.navigate(['users/detail', id]);
  }

  deletePersonId(id: any) {
    this.user.deleteUserData(id).subscribe((res: any) => {
      // console.log(res);
      this.ngOnInit();
    })
  }
}
