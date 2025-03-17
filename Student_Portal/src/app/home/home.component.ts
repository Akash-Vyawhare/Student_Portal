import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostReactiveComponent } from '../add-post-reactive/add-post-reactive.component';
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
    console.log("Add Post Reactive");
   // this.router.navigate(['/auth']);
    this.dialog.open(AddPostReactiveComponent, {
      width: "550px",
      
      panelClass: 'custom-dialog-addpost-container'
    }); 
   
    
  }

}
