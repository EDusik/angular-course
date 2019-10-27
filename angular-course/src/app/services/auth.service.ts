import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  login(username: string, password: string) {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('token', AUTH_TOKEN);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  setToken() {
    localStorage.setItem('token', AUTH_TOKEN);
  }

}
