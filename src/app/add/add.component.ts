import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public post: Post;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.post = { title: '', content: ''};
  }

  addPost(post: Post) {
    this.postsService.addNewPost(post).subscribe(y => {
      console.log('pobrany nowy post:', y);
    });
  }

}
