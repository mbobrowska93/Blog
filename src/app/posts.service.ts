import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsArray: Post[] = [];
  postDetails: Post;

  constructor(private http: HttpClient, private router: Router) { }

  getPost() {
    const link = 'https://teacher-app.azurewebsites.net/articles';
    return this.http.get<Array<Post>>(link);
  }

  getData(): Post[] {
    return this.postsArray;
  }

  addNewPost(post: Post) {
    console.log('post:', post);
    const link1 = 'https://teacher-app.azurewebsites.net/articles';
    return this.http.post<Post>(link1, post);
  }
 /*showDetails(content: Post) {
   this.postDetails = content;
 }*/

 returnDetails(id: number) {
  const link2 = 'https://teacher-app.azurewebsites.net/articles/byId/' + id;
  return this.http.get<Post>(link2);
 }


 updatePost(newPost: Post){
  const link3 = 'http://teacher-app.azurewebsites.net/articles/edit';
  return this.http.put<Post>(link3, newPost);
 }
}
