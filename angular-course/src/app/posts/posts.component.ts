import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-posts',
  styleUrls: ['./posts.component.scss'],
  template: `
    <div class="wrapper">
      <div *ngFor="let post of posts" class="post" [@postAppeared]="postState">
        <h3>{{ (post?.title.length > 16) ? (post?.title | slice:0:16) + '...' : (post?.title)}}</h3>
        <p>{{ (post?.body.length > 60) ? (post?.body | slice:0:60) + '...' : (post?.body) }}</p>
        <a [routerLink]="['/post/'+ post?.id]">read more</a>
      </div>
    </div>
  `,
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
    });
  }
}
