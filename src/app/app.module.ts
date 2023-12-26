import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomePageComponent,
    PublicPageComponent,
    PersonalPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    OverlayPanelModule,
    CardModule,
    PanelModule,
    DialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    ButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
