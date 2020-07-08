import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  postDetails: Post;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.postDetails = this.postsService.returnDetails();
  }

}
