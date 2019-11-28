import { Component, OnInit, Input } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-post-comments-bar',
  templateUrl: './post-comments-bar.component.html',
  styleUrls: ['./post-comments-bar.component.css']
})
export class PostCommentsBarComponent implements OnInit {

  comments: Comment[];
   @Input('commentsArray') set selecionado(commentsArray) {
    console.log('comments array: ', commentsArray);
    this.comments = commentsArray;
    // this.numberComments = this.comments.length;
  }

  numberComments: number;

  constructor() { }

  ngOnInit() {

  }

}
