import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.viewUserData(id).subscribe((res: any) => {
      this.user = res.data;
    })
  }
  backtoUsers() {
    this.router.navigate(['users']);
  }

}
