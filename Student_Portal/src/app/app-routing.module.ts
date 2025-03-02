import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path:'add-post',component:AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
