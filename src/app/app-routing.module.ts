import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: PersonalPageComponent  },
  { path: 'public-feed', component: PublicPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
