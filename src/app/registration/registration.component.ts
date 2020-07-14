import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User;

  constructor(private router: Router, private postsService: PostsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = { login: '', password: '', isAdmin: false };
  }


  createAccount(user: User) {     // dopracowac
    if (user.login.length < 1 || user.password.length < 1) {
      alert('Please, complete all fields!');
    }
    else {
      console.log('uzytkownik:', user);
      this.postsService.register(user).subscribe(y => {
        console.log('zarejestrowany uzytkownik:', y);
        this.router.navigateByUrl('/signIn', {});
      });
    }
  }
}