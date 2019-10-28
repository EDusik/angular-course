import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_TOKEN = 'authenticated';
const USER_ID = '01';

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

  login(username: string, password: string) {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('token', AUTH_TOKEN);
      localStorage.setItem('userId', USER_ID);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  }

  setToken() {
    localStorage.setItem('token', AUTH_TOKEN);
  }

}
