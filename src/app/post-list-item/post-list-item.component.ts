import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    console.log("J'aime !");
    this.post.loveits = this.post.loveits + 1;
  }

  onDislike() {
    console.log("Je n'aime plus!");
    this.post.loveits = this.post.loveits - 1;
  }

  getColor() {
    if (this.post.loveits > 0) {
      return 'green';
    } else if (this.post.loveits < 0) {
      return 'red';
    }
}

}
