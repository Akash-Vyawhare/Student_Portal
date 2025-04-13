import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './layout/headerbar/headerbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './auth/signUp/signUp.component';
import { MatModule } from './mat.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SideNavListComponent } from './layout/side-nav-list/side-nav-list.component';
import { LayoutComponent } from './layout/layout.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    AddPostComponent,
    HomeComponent,
    FooterComponent,
    SideNavListComponent,
    LayoutComponent,
    UserlistComponent,


  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    AgGridModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
