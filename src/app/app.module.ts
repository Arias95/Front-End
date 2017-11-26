import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublicationModule } from '../publication/publication.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    PublicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
