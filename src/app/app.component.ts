import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts: Post[] = [];

  constructor() {
    const p1 = new Post('The First Post', 'A post about Angular....', 3);
    this.posts.push(p1);

    const p2 = new Post('The Second Post', 'A post about NGRX....', -2);
    this.posts.push(p2);

    const p3 = new Post('The Thrid Post', 'A post about RXJS....', 0);
    this.posts.push(p3);
  }

}

