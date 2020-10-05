import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  newPost: Post;

  constructor(private router: Router, private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.returnDetails(id).subscribe(post => {
      this.newPost = post;
    });
  }

  updatePost(newPost: Post) {
    this.postsService.updatePost(newPost).subscribe(post => {
      this.router.navigateByUrl('/list', {});
    });

  }

}
