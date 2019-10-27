import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { PostDetailsComponent } from '../posts/post-details/post-details.component';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import { LoginComponent } from '../shared/login/login.component';
import { AuthGuardService } from '../services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'create-post', component: PostCreateComponent, canActivate: [AuthGuardService] },
  { path: '', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
