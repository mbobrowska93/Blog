import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';
import { Post } from './post';
import { Observable } from 'rxjs';
import { User } from './user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService implements CanActivate {

  postsArray: Post[] = [];
  postDetails: Post;
  login: string;
  userRights: boolean;
  userRole: string;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }

  getPost() {
    const link = 'https://teacher-app.azurewebsites.net/articles';
    return this.http.get<Array<Post>>(link);
  }

  getData(): Post[] {
    return this.postsArray;
  }

  addNewPost(post: Post) {
    console.log('post:', post);
    const link = 'https://teacher-app.azurewebsites.net/articles';
    return this.http.post<Post>(link, post);
  }

  returnDetails(id: number) {
    const link = 'https://teacher-app.azurewebsites.net/articles/byId/' + id;
    return this.http.get<Post>(link);
  }

  updatePost(newPost: Post) {
    const link = 'http://teacher-app.azurewebsites.net/articles/edit';
    return this.http.put<Post>(link, newPost);
  }

  deletePost(id: number) {
    const link = 'http://teacher-app.azurewebsites.net/articles/byid/ ' + id;
    return this.http.delete<Post>(link);
  }

  register(user: User) {
    const link = 'http://teacher-app.azurewebsites.net/user/register';
    return this.http.post<User>(link, user);
  }

  signIn(user: User) {
    const link = 'http://teacher-app.azurewebsites.net/user/login';
    return this.http.post<User>(link, user);
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  getUsers() {
    const link = 'http://teacher-app.azurewebsites.net/user';
    return this.http.get<Array<User>>(link);
  }

  returnUserDetails(login: string) {
    const link = 'http://teacher-app.azurewebsites.net/user/bylogin/' + login;
    return this.http.get<User>(link);
  }

  changeUserRights(newUser: User) {
    const link = 'http://teacher-app.azurewebsites.net/user/edit';
    return this.http.put<User>(link, newUser);
  }


}
