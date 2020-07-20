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
  status: string;
  rights: string;

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

  /* isUserAdmin(trueOrFalse: string) {
    console.log(trueOrFalse);
    if (trueOrFalse === 'false') {
      this.rights = 'NO';
    }
    else this.rights = 'YES';
  }
   */

}
