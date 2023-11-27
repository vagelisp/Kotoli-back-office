import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
      path: '', component: AuthComponent,
       children: [
            {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          } ,
          { path: 'login', component: LoginComponent },
      ] 
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
