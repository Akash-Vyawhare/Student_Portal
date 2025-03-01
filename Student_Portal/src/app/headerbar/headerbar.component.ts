import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent {
 isOpened = false;
  constructor() { };
  searchControl = new FormControl('');
  toggleSidenav() {
    this.isOpened = !this.isOpened;
  }
}
