import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './client-side/home/home.component';
import { LoginComponent } from './operator-side/login/login.component'; 

const appRoutes: Routes = [
  
  {
    path: "home",
    component: HomeComponent,
  },
  
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
