import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouteModule } from './auth-route.module';
import {  SignUpComponent } from './signUp/signUp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatModule } from '../mat.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRouteModule,
    MatModule,
    

  ]
})
export class AuthModule { }
