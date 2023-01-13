import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';

import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'chats', component: ChatsComponent },
      // { path: 'crear', component: CreateBudgetComponent },
      // { path: 'listado', component: PresupuestoListComponent },
      // { path: '**', redirectTo: 'listado' },
    ],
  },
  // {
  //   path: 'chats',
  //   component: ChatsComponent,
  //   // ...canActivate(redirectToLogin),
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   ...canActivate(redirectToHome),
  // },
  // {
  //   path: 'sign-up',
  //   component: SignUpComponent,
  //   ...canActivate(redirectToHome),
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   ...canActivate(redirectToLogin),
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   ...canActivate(redirectToLogin),
  // },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
