import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/shared/login/login.component';
import { PostsComponent } from '../components/posts/posts.component';
import { PostDetailsComponent } from '../components/posts/post-details/post-details.component';
import { PostCreateComponent } from '../components/posts/post-create/post-create.component';
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
