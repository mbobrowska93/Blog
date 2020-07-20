import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { AuthService } from '../auth.service';
import { Post } from '../post';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus: boolean;
  activeLogin: string;



  constructor(private router: Router, private postsService: PostsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginStatus = this.authService.isAuthenticated();

  }

  signOut() {
    localStorage.clear();
    window.location.reload(); // odświezenie strony
  }

  isUserAdmin(): boolean {
    if (localStorage.getItem('role') === 'Admin') {
      return true;
    } else return false;
  }

  isTheLogin(): boolean {

    if ( localStorage.getItem('user') !== null) {
      return true;
    } else return false;
  }

  withoutLogin(): boolean {

    if ( localStorage.getItem('user') == null) {
      return true;
    } else return false;
  }

  writeLoginOnScreen(): boolean {

    if (localStorage.getItem('user') !== null) {
      this.activeLogin = localStorage.getItem('user');
      return true;
    } else return false;
  }


}
