import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  animations: [
    trigger('appeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class PostDetailsComponent implements OnInit {

  title = 'Details';
  post: any;
  comments: any;
  commentState = 'ready';
  showComments = true;

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.getPost(postId);
    this.getPostComments(postId);
  }

  getPost(postId) {
    this.postService.getPost(postId).subscribe(response => {
      this.post = response;
    });
  }

  getPostComments(postId) {
    this.postService.getPostComments(postId).subscribe(response => {
      this.comments = response;
    });
  }

  goBackToPostList() {
    this.location.back();
  }

  showAllComments() {
    this.showComments = !this.showComments;
  }

}
