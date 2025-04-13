import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './auth/signUp/signUp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClientSideRowModelModule } from 'ag-grid-community';



@NgModule({
  declarations: [
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    AgGridModule
  ],
  imports: [
    // BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  
    // ClientSideRowModelModule, // Removed as it is not a valid Angular module
  MatSidenavModule,
  MatListModule,
  MatIconModule
  ]
})
export class MatModule {
  
 }
