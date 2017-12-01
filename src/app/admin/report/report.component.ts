import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ReportService } from '../../report.service';
import { Country } from '../../models/country';
import { University } from '../../models/university';
import { Skill } from '../../models/skill';
import { Report } from '../../models/report';
import { ReportRequest } from '../../models/reportRequest';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private Countries: Country[];
  private Universities: University[];
  private Skills: Skill[];
  private reports: Report[];
  private dataReady = false;
  private dataUniReady = false;
  private dataSkillReady = false;
  private alertRequired = false;
  private alertMax = false;
  private selectedSkills = new Array(0);

  private country: string;
  private university: string;
  private amount: number;

  private reportReady = false;

  constructor(
    private userService: UserService,
    private reportServ: ReportService
  ) { }

  ngOnInit() {
    this.getCountries();
    this.getSkills();
  }

  countryChange(newCountry) {
    this.getUniversities(newCountry);
  }

  getCountries(): void {
    this.userService.getCountries().subscribe(response => {
      this.Countries = response;
      this.dataReady = true;
    });
  }

  getUniversities(country: string): void {
    this.userService.getUniversities(country).subscribe(response => {
      this.Universities = response;
      this.dataUniReady = true;
    });
  }

  getSkills(): void {
    this.userService.getSkills().subscribe(response => {
      this.Skills = response;
      this.dataSkillReady = true;
    });
  }

  selectSkill(skill: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedSkills.push(skill);
    } else {
      const index = this.selectedSkills.indexOf(skill);
      this.selectedSkills.splice(index, 1);
    }
  }

  generateReport() {
    if (this.selectedSkills.length > 4) {
      this.alertMax = true;
    } else if (this.country === '' ||
      this.selectedSkills.length === 0 || this.amount <= 0) {
      this.alertRequired = true;
    } else {
      const req = new ReportRequest();
      req.nombreAdmi = 'admin';
      req.pais = this.country;
      req.univerisdad = this.university;
      req.habilidades = this.selectedSkills;
      req.fecha = Date();
      req.ListaContenido = [];
      req.cantidadResultado = this.amount;

      this.reportServ.getReport(req).subscribe(response => {
        this.reports = response;
        this.reportReady = true;
      });
    }
  }

  closeAlertRequired() {
    this.alertRequired = false;
  }

  closeAlertMax() {
    this.alertMax = false;
  }

}
