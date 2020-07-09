import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page = 1;
  totalRecords: string;
  myPostsArray: Post[] = [];

  // dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'created', 'details'];
 
  constructor(private router: Router, private postsService: PostsService) { }

   // @ViewChild (MatSort, {static: true}) sort: MatSort;
   // @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    // pobranie postów z api
    this.postsService.getPost().subscribe(x => {
    this.myPostsArray = x;
    });

   // this.dataSource = new MatTableDataSource(this.myPostsArray);
    // this.dataSource.sort = this.sort;
  }

  showDetails(content: Post) {
   // this.postsService.showDetails(content);
    this.router.navigateByUrl('/detail/' + content.id, {});
  }

  editPost(post: Post) {
    this.router.navigateByUrl('/edit/' + post.id, {});
  }

  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe(x => {
      console.log(x);
    });
  }

}

