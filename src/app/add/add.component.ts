import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public post: Post;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private postsService: PostsService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.post = { id: 0, title: '', content: '', created: new Date() };
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  addPost(post: Post): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;

    }
    this.postsService.addNewPost(post).subscribe(y => {
    this.router.navigateByUrl('/list', {});

    });
  }

}
