import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicationModule } from './publication/publication.module';
import { AdminModule } from './admin/admin.module';
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
import { RegisterAdmiComponent } from './register-admi/register-admi.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddPublicationComponent,
    RegisterAdmiComponent,
    SearchComponent,
    SearchBoxComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PublicationModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [UserService, RestService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
