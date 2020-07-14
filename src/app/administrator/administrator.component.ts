import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { User } from '../user';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  myUsersArray: User[] = [];

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
        // pobranie wszystkich uzytkownikow z api
        this.postsService.getUsers().subscribe(x => {
          this.myUsersArray = x;
          console.log(this.myUsersArray);
        });
  }

  showDetails(user: User) {
      this.router.navigateByUrl('/userDetails/' + user.login, {});
  }

}
