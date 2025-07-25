import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Login } from './login/login';

const routes: Routes = [
  {path:'',component:Posts},
  {path:'login',component:Login},
  {path:'posts',component:Posts},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
