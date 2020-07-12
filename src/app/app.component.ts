import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  constructor(private authService: AuthService, private postsService: PostsService) { }


  ngOnInit(): void {
    
  }






}
