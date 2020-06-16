import { WingComponent } from './wing/wing.component';
import { AdheadComponent } from './adhead/adhead.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
 { path: 'dashboard', component:DashboardComponent},
{ path: '', redirectTo:'/home', pathMatch: 'full'},
{ path: 'wing' , component:WingComponent },
{ path: 'adhead', component:AdheadComponent},
{ path: 'home' , component:HomeComponent},
{ path: 'register' , component:RegisterComponent},
{ path: 'admin' , component:AdminComponent},
{ path: 'complaint' , component:ComplaintComponent},
{ path: 'status', component: StatusComponent},
{ path: 'remarks', component:RemarksComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'previous', component: PreviousComponent},
{ path: 'usrheader', component: UsrheaderComponent},
{ path: 'usrdashboard', component: UsrdashboardComponent},
{ path: 'user', component:UsersComponent},
{ path: 'members', component:MembersComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
