import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
    public canActivate(): boolean {
      if (!this.authService.userIsAuthenticated()) {
        this.router.navigateByUrl('/login');
        return false;
      }
      return true;
    }
}
