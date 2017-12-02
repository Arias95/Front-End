import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAdmiComponent } from './register-admi/register-admi.component';
import { ReportComponent } from './admin/report/report.component';
import { AddUniversityComponent } from './admin/add-university/add-university.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'regAdmin', component: RegisterAdmiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: ReportComponent },
  { path: 'addUni', component: AddUniversityComponent },
  { path: 'addSkills', component: SkillsComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
