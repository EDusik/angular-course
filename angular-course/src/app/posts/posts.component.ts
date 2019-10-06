import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('postAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {

  public posts;
  postState = 'ready';

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
      console.log(response);
    });
  }
}
