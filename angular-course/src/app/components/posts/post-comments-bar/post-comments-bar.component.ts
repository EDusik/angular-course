import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-comments-bar',
  templateUrl: './post-comments-bar.component.html',
  styleUrls: ['./post-comments-bar.component.css']
})
export class PostCommentsBarComponent implements OnInit {

  numberComments: number;
  showComments = true;

   @Input('commentsNumber') set selecionado(commentsNumber) {
    this.numberComments = commentsNumber;
  }

  @Output() showAllComments = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  changeShowComments() {
    this.showComments = !this.showComments;
    this.showAllComments.emit(this.showComments);
  }

}
