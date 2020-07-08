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

  writeOnTheList(e: string, f: string) {
    // dostajemy zadanie i komentarz w postaci stringow, i w tej metodce musimy do niej stworzyc obiekt i mu te parametry dac
    console.log(e, f);
    const newPost: Post = new Post(e, f); // przekazanie nazwy dla nowego obiektu Task
    this.postsArray.push(newPost);
  }

  getData(): Post[] {
    return this.postsArray;
  }

  addNewPost(post: Post) {
    console.log('post:', post);
    const link1 = 'https://teacher-app.azurewebsites.net/articles';
    return this.http.post<Post>(link1, post);
  }
 showDetails(content: Post){
   this.postDetails = content;
 }

 returnDetails(){
   return this.postDetails;
 }
}
