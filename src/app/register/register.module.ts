import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegisterComponent],
  providers: [UserService]
})
export class RegisterModule { }
