import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

const MIN_LENGTH = 2;
const MAX_LENGTH = 42;

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService
  ) { }

  newPostForm: FormGroup;

  ngOnInit() {
    this.setNewPostForm();
  }

  setNewPostForm() {
    this.newPostForm = this.formBuilder.group({
      userId: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(4)]),
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(4)]),
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(MAX_LENGTH)]),
      body: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(999)]),
    });
  }

  createPost() {
    const data = {
      userId: 1,
      id: this.newPostForm.get('id').value,
      title: this.newPostForm.get('title').value,
      body: this.newPostForm.get('body').value,
    };

    this.postService.newPost(data).subscribe(
      res => {
          alert('Success');
        },
        error => {
          alert('Error');
        }
    );
  }

}
