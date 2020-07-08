import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  i: number;
  arraySize: number;
  post: Post;
  myPostsArray: Post[] = [];
  myPostDetails: string;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    // pobranie postów z api
    this.postsService.getPost().subscribe(x => {
      console.log('pobrane posty:', x);
      this.arraySize = x.length;

      for (this.i = 0; this.i < this.arraySize; this.i++) {
        this.post = x[this.i];
        // wyslanie postow do serwisu
        this.postsService.writeOnTheList(this.post.title, this.post.content);
      }
      console.log('przykladowe:', this.myPostsArray);
    });

    // pobranie postow z serwisu i wypisanie ich
    this.myPostsArray = this.postsService.getData();
  }

  // nie zrobilam tego poprzez pobranie z api przez id, bazowalam na pobranym wczesniej obiekcie - nie wiem jak inaczej
  showDetails(content: string) {
    this.postsService.showDetails(content);
    this.router.navigateByUrl('/detail', {});
  }
}
