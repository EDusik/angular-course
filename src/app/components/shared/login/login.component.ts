import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.setLoginForm();
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      user: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  onLogin() {
    let authObs = false;

    const data = {
      email: this.loginForm.get('user').value,
      password: this.loginForm.get('password').value,
    };

    authObs = this.authService.login(data.email, data.password);

    if (authObs) {
      this.router.navigateByUrl('/posts');
      this.authService.setToken();
    } else {
      this.clearLoginForm();
      alert('Invalid email or password');
      this.authService.logout();
    }
  }

  clearLoginForm() {
    this.loginForm.get('user').setValue('');
    this.loginForm.get('password').setValue('');
  }

}
