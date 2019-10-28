import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: UserModel;
  invalidEmailOrPassoword = false;
  newAccount = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
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
    // let authObs = false;

    this.user = {
      email: this.loginForm.get('user').value,
      password: this.loginForm.get('password').value,
    };
    let token;
    const userApi = this.userService.login(this.user);
    userApi.subscribe(
      response => token = response.access_token,
      error => this.invalidEmailOrPassoword = true
    )
    .add(() => {
      this.authService.storeUser(this.user, token);
      this.router.navigate(['posts']);
    });
  }

  onNewAccount() {
    this.newAccount = true;
    this.clearLoginForm();
  }

  onRegister() {
    let token;
    this.user = {
      email: this.loginForm.get('user').value,
      password: this.loginForm.get('password').value,
    };

    const userApi = this.userService.register(this.user);
    userApi.subscribe(
      response => token = response.access_token,
      error => this.invalidEmailOrPassoword = true
    )
    .add(() => {
      this.authService.storeUser(this.user, token);
      alert('New account successfully created!');
      this.router.navigate(['posts']);
    });
  }

  clearLoginForm() {
    this.loginForm.get('user').setValue('');
    this.loginForm.get('password').setValue('');
  }

}
