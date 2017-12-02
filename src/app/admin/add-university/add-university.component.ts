import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UniversityService } from '../../university.service';
import { Country } from '../../models/country';
import { NewUni } from '../../models/new-university';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
  private currentUser: string;
  private alert = false;
  private dataReady = false;
  private success = false;
  private successCountry = false;
  private alertCountryFailure = false;
  private alertUniFailure = false;
  private countries: Country[];
  private country: string;
  private name: string;
  private countryName: string;

  constructor(
    private userServ: UserService,
    private uniServ: UniversityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCountries();
    this.userServ.currentUser.subscribe(response => {
      this.currentUser = response;
    });
  }

  getCountries() {
    this.userServ.getCountries().subscribe(response => {
      this.countries = response;
      this.dataReady = true;
    }, err => {
      console.log('Error cargando paises');
      console.log(err);
    });
  }

  addUni() {
    if (this.country === '' || this.name === '') {
      this.alert = true;
    } else {
      const newUni = new NewUni();
      newUni.pais = this.country;
      newUni.universidad = this.name;
      this.uniServ.addUniversity(newUni).subscribe(response => {
        this.success = true;
        this.country = '';
        this.name = '';
      }, err => this.alertUniFailure = true);
    }
  }

  addCountry() {
    this.userServ.addCountry(this.countryName).subscribe(response => {
      this.successCountry = true;
      this.countryName = '';
    }, err => this.alertCountryFailure = true);
  }

  closeSuccess() {
    this.success = false;
  }

  closeSuccessCountry() {
    this.successCountry = false;
  }

  closeAlertCountryFailure() {
    this.alertCountryFailure = false;
  }

  closeAlertUniFailure() {
    this.alertUniFailure = false;
  }

  closeAlert() {
    this.alert = false;
  }

  report() {
    this.router.navigate(['/admin']);
  }

  addUniAdmin() {
    this.router.navigate(['/addUni']);
  }

  addSkills() {
    this.router.navigate(['/addSkills']);
  }
}
