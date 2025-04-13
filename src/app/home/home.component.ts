import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  SignUpComponent } from '../auth/signUp/signUp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog:MatDialog,
    private router:Router,
  ) { }

  addPostR() {
   // this.router.navigate(['/auth']);
    this.dialog.open(SignUpComponent, {
      width: "550px",
      
      panelClass: 'custom-dialog-addpost-container'
    }); 
   
    
  }

}
