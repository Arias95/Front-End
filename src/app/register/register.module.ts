import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CountryBoxComponent } from './country-box/country-box.component';
import { UserService } from '../user.service';
import { RegisterComponent } from './register.component';
import { UniBoxComponent } from './uni-box/uni-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoBoxComponent, CountryBoxComponent, RegisterComponent, UniBoxComponent],
  providers: [UserService]
})
export class RegisterModule { }
