import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  postDetails: string;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.postDetails = this.postsService.returnDetails();
  }

}
