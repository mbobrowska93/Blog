import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { User } from '../user';
import * as jwt_decode from 'jwt-decode';
import { Token } from '../token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user: User;
  invalidLogin: boolean;
  decodedToken: Token;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.user = { login: '', password: '', isAdmin: false };
  }

  createAccount() {
    this.router.navigateByUrl('/registration', {});
  }

  signIn(user: User) {
    console.log(user);
    this.postsService.signIn(user).subscribe(
      response => {
        let token = (response as any).token;
        localStorage.setItem('jwt', token);
        this.decodedToken = jwt_decode(token);
        console.log(this.decodedToken.role);
        localStorage.setItem('role', this.decodedToken.role);
        this.invalidLogin = false;
        localStorage.setItem('user', user.login);
        this.router.navigate(['/']);

      },
      err => {
        this.invalidLogin = true;
      }
    );
  }
}
