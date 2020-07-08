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

  page = 1;
  totalRecords: string;
  myPostsArray: Post[] = [];
  displayedColumns: string[] = ['title', 'created'];
 

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {

    // pobranie postów z api
    this.postsService.getPost().subscribe(x => {
    this.myPostsArray = x;
    });
  }

  showDetails(content: Post) {
    this.postsService.showDetails(content);
    this.router.navigateByUrl('/detail/' + content.id, {});
  }

}

