import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  title = 'Details';
  post: any;

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.getPost(postId);
  }

  getPost(postId) {
    this.postService.getPost(postId).subscribe(response => {
      this.post = response;
    });
  }

  goBackToPostList() {
    this.location.back();
  }
}
