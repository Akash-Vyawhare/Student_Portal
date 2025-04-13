import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/common/sharedService/shared.service';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent  {
  isOpened = false;
constructor(private logoutService:UserloginService, private router:Router, private sharedService:SharedService ) { }

ngOnInit(): void {
  this.sharedService.functionCalled$.subscribe(() => {
    this.toggleSidenav();
    console.log('functionCalled$');
     // ✅ Call function when event is received
  });
}

toggleSidenav() {
  this.isOpened = !this.isOpened;
  console.log('toggleSidenav');
  
}

  logout() {
    this.logoutService.logout();
    this.router.navigate(['/login']);
  } 
}
