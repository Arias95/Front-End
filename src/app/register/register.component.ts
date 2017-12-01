import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Country } from '../models/country';
import { University } from '../models/university';
import { Skill } from '../models/skill';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private Countries: Country[];
  private Universities: University[];
  private Skills: Skill[];
  private dataReady = false;
  private dataUniReady = false;
  private dataSkillReady = false;

  private name: string;
  private lname; string;
  private country: string;
  private university: string;
  private userID: string;
  private email: string;
  private email2: string;
  private mobile: string;
  private homePhone: string;
  private password: string;
  private pwdConfirm: string;
  private selectedSkills = new Array(0);

  constructor(
    private userService: UserService,
    private router: Router
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

  register() {
    const newUser = {
      nombre: this.name,
      apellido: this.lname,
      carnet: this.userID,
      email1: this.email,
      email2: this.email2,
      telefonoM: this.mobile,
      telefonoF: this.homePhone,
      password: this.password,
      pais: this.country,
      universidad: this.university,
      habilidades: this.selectedSkills
    };

    this.userService.register(newUser).subscribe(response => {
      this.userService.changeUser(this.userID);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    });
  }
}
