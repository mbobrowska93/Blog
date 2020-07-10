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
   this.user = { name: '', login: '', email: '', password: '', date: new Date() };
  }


  createAccount(user: User) {     // dopracowac
    if (user.name.length < 1 || user.login.length < 1 || user.password.length < 1 || user.email.length < 1) {
      alert("Please, complete all fields!");
    }
    else{
      console.log('uzytkownik:', user);
    }
  }
}