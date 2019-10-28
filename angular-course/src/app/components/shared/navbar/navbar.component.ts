import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userIsAuthenticated = false;
  userEmail: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkUser();
  }

  checkUser() {
    if (sessionStorage.getItem('access_token') !== null) {
      this.userIsAuthenticated = true;
      this.userEmail = sessionStorage.getItem('user_id');
    }
  }

  logout() {
    this.authService.logout();
    this.userIsAuthenticated = false;
    this.router.navigateByUrl('/posts');
  }
}
