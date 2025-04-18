import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserloginService } from '../../services/userlogin.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/common/sharedService/shared.service';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {
 isOpened = false;
 userName:any='';
 user:any;
  constructor( private logoutService:UserloginService, private router:Router, private sharedService: SharedService) {

   };

   ngOnInit(){
    this.user=localStorage.getItem('user');
    this.userName=JSON.parse(this.user).name;
   }
  searchControl = new FormControl('');
  // toggleSidenav() {
  //   this.isOpened = !this.isOpened;
  // }

  // logout() {
  //   this.logoutService.logout();
  //   this.router.navigate(['/login']);
  // }
  toggleSidenav() {
    this.sharedService.callFunction('Value');
    console.log('toggleSidenav');
     // ✅ Notify other components
  }
}
