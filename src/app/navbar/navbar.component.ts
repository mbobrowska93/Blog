import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus: boolean;
  activeLogin: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginStatus = this.authService.isAuthenticated();

  }

  signOut() {
    localStorage.clear();
    window.location.reload();
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
