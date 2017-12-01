import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../report.service';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ReportComponent],
  providers: [
    ReportService
  ]
})
export class AdminModule { }
