import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WingComponent } from './wing/wing.component';
import { AdheadComponent } from './adhead/adhead.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { StatusComponent } from './status/status.component';
import { RemarksComponent } from './remarks/remarks.component';
import { ProfileComponent } from './profile/profile.component';
import { PreviousComponent } from './previous/previous.component';
import { UsrheaderComponent } from './usrheader/usrheader.component';
import { UsrdashboardComponent } from './usrdashboard/usrdashboard.component';
import { UsersComponent } from './users/users.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   
    WingComponent,
   
    AdheadComponent,
   
    HomeComponent,
   
    RegisterComponent,
   
    AdminComponent,
   
    ComplaintComponent,
   
    StatusComponent,
   
    RemarksComponent,
   
    ProfileComponent,
   
    PreviousComponent,
   
    UsrheaderComponent,
   
    UsrdashboardComponent,
   
    UsersComponent,
   
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
