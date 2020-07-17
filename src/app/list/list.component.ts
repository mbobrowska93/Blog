import { Component, OnInit, ViewChild, EventEmitter, Output, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { AuthService } from '../auth.service';
import { Post } from '../post';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  page = 1;
  totalRecords: string;
  myPostsArray: Post[] = [];
  loginStatus: boolean;
  activeLogin: string;
  displayedColumns: string[] = ['title', 'created', 'details'];


  constructor(private router: Router, private postsService: PostsService, private authService: AuthService) { }

  ngOnInit(): void {

    // pobranie postów z api
    this.postsService.getPost().subscribe(x => {
      this.myPostsArray = x;
    });
    this.loginStatus = this.authService.isAuthenticated();
    // this.activeLogin = this.postsService.returnActiveLogin();
    // console.log('w app', this.activeLogin);

  }

  showDetails(content: Post) {
    this.router.navigateByUrl('/detail/' + content.id, {});
  }

  editPost(post: Post) {
    console.log(this.loginStatus);
    this.router.navigateByUrl('/edit/' + post.id, {});
  }

  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe(x => {
      console.log(x);
      window.location.reload(); // odświezenie strony
    });
  }

  isTheLogin(): boolean {

    if ( localStorage.getItem('user') !== null) {
      return true;
    } else return false;
  }

  isUserAdmin(): boolean {
    if (localStorage.getItem('role') === 'Admin') {
      return true;
    } else return false;
  }

}

