import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userIsAuthenticated = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck(): void {
    this.userIsAuthenticated = this.authService.userIsAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

}
