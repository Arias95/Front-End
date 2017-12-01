import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './admin/report/report.component';
import { AddUniversityComponent } from './admin/add-university/add-university.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: ReportComponent },
  { path: 'addUni', component: AddUniversityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
