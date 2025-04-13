import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth/signUp/signUp.component';
import { HeaderbarComponent } from './layout/headerbar/headerbar.component';
import { LayoutComponent } from './layout/layout.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  
  {path: 'application', component: LayoutComponent},
  {path:'userSignUp', component:SignUpComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'add-post', component: AddPostComponent },
   { path: 'userlist', component: UserlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
