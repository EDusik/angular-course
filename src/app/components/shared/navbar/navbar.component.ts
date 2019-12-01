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

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck(): void {
    this.userIsAuthenticated = this.authService.userIsAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/posts');
  }
}
