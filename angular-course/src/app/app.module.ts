import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routers/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { LoginComponent } from './components/shared/login/login.component';
import { PostsModule } from './components/posts/posts.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    PostCreateComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
