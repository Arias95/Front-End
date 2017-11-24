import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicationComponent } from './publication/publication.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    PublicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
