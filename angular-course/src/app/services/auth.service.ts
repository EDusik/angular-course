import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

const AUTH_TOKEN = 'authenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public httpClient: HttpClient
  ) {}

  userIsAuthenticated() {
    const token = localStorage.getItem('token');
    return AUTH_TOKEN === token;
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  storeUser(user: UserModel, token) {
      sessionStorage.setItem('access_token', token);
      sessionStorage.setItem('user_id', user.email);
  }

  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('user_id');
  }

}
