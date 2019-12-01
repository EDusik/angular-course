import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { AuthService } from 'src/app/services/auth.service';

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
    private postService: PostsService,
    private authService: AuthService
  ) { }

  createPostForm: FormGroup;

  ngOnInit() {
    this.setPostForm();
  }

  setPostForm() {
    this.createPostForm = this.formBuilder.group({
      userId: this.formBuilder.control({value: this.authService.getUserId(), disabled: true}),
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(4)]),
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(MAX_LENGTH)]),
      body: this.formBuilder.control('', [Validators.required, Validators.minLength(MIN_LENGTH), Validators.maxLength(999)]),
    });
  }

  createPost() {
    const data = {
      userId: this.createPostForm.get('userId').value,
      id: this.createPostForm.get('id').value,
      title: this.createPostForm.get('title').value,
      body: this.createPostForm.get('body').value,
    };

    this.postService.newPost(data).subscribe(
      res => {
        this.clearLoginForm();
        alert('Success');
      },
      error => {
        alert('Error');
      }
    );
  }

  clearLoginForm() {
    this.createPostForm.get('id').setValue('');
    this.createPostForm.get('title').setValue('');
    this.createPostForm.get('body').setValue('');
  }
}
