import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user: User;
  invalidLogin: boolean;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.user = { login: '', password: '' };
  }

  createAccount() {
    this.router.navigateByUrl('/registration', {});
  }

  signIn(user: User) {
    console.log(user);
    this.postsService.signIn(user).subscribe(
      response => {
        let token = (response as any).token;
        localStorage.setItem('jwt', token); // zapis tokena w pamięci localStorage
        this.invalidLogin = false;
        this.router.navigate(['/']);
      },
      err => {
        this.invalidLogin = true;
      }
    );

    /* (y => {
      console.log('zalogowany uzytkownik:', y);
    }); */

  }
}
