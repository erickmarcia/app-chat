import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';

import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AuthPipe,
} from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
