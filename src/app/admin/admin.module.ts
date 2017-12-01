import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../report.service';
import { UniversityService } from '../university.service';
import { ReportComponent } from './report/report.component';
import { AddUniversityComponent } from './add-university/add-university.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ReportComponent, AddUniversityComponent],
  providers: [
    ReportService,
    UniversityService
  ]
})
export class AdminModule { }
