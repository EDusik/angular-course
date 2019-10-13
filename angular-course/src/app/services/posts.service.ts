import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post-model';

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

  getPostComments(id: number): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

}
