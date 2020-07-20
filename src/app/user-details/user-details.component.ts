import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: User;
  rights: boolean;
  userRights;
  userOrAdmin: string;

  constructor(private router: Router, private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login');
    this.postsService.returnUserDetails(login).subscribe(data => {
      this.userDetails = data;
    });
  }

  trueRights()  {
    this.rights = true;
    // this.userOrAdmin = 'YES';
    this.changeRights(this.rights);
  }

  falseRights() {
    this.rights = false;
    // this.userOrAdmin = 'NO';
    this.changeRights(this.rights);
  }

  changeRights(rights: boolean) {
    this.userDetails.isAdmin = rights;
    this.postsService.changeUserRights(this.userDetails).subscribe(data => {
      this.userRights = data;
    });
  }
}
