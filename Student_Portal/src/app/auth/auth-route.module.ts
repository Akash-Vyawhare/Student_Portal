import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes = [
  {
    path: '', component: LoginComponent }
]; 
  

@NgModule({
  declarations: [],
   imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRouteModule { }
