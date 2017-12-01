import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicationModule } from './publication/publication.module';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { RestService } from './rest.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddPublicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PublicationModule,
    AppRoutingModule
  ],
  providers: [UserService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
