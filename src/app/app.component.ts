import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  loginStatus: boolean;

  ngOnInit(): void {
    // this.loginStatus = this.authService.isAuthenticated();
  }

  signOut() {
    localStorage.clear();
    window.location.reload(); // odświezenie strony
  }

}
