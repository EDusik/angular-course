import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/posts.module';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { AppRoutingModule } from './routers/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
