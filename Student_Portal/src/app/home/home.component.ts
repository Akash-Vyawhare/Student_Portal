import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostReactiveComponent } from '../add-post-reactive/add-post-reactive.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog:MatDialog) { }

  addPostR() {
    console.log("Add Post Reactive");
    this.dialog.open(AddPostReactiveComponent, {
      width: '500px',
      height: '500px'
    });
  }

}
