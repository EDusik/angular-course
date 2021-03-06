import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post-model';
import { PostCommentModel } from '../models/post-comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getPostComments(id: number): Observable<PostCommentModel[]> {
    return this.httpClient.get<PostCommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }

  newPost(post: PostModel): Observable<PostModel> {
    return this.httpClient.post<PostModel>('https://jsonplaceholder.typicode.com/posts', post);
  }
}
