import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.css']
})
export class TutoriaComponent implements OnInit {
  private loggedUser: string;
  private skills: Skill[];
  private dataReady = false;
  private success = false;
  private dateError = false;
  private titulo: string;
  private descripcion: string;
  private habilidad: string;
  private fecha: string;
  private hora: string;
  private lugar: string;
  private costo: string;

  constructor(
    private userServ: UserService
  ) { }

  ngOnInit() {
    this.userServ.currentUser.subscribe(response => {
      this.loggedUser = response;
      this.getSkills();
    });
  }

  getSkills() {
    this.userServ.getSkillsUser(this.loggedUser).subscribe(response => {
      this.skills = response;
      this.dataReady = true;
    });
  }

  postTutoria() {
    const date = new Date(this.fecha);
    const today = new Date();
    if (date < today) {
      this.dateError = true;
    } else {
      const req = {
        titulo: this.titulo,
        carnetDueno: this.loggedUser,
        habilidad: this.habilidad,
        descripcion: this.descripcion,
        fechaTutoria: this.fecha,
        horaTutoria: this.hora,
        lugarTutoria: this.lugar,
        costoTutoria: this.costo
      };

      this.userServ.postTutoria(req).subscribe(response => {
        this.success = true;
        this.titulo = '';
        this.habilidad = '';
        this.descripcion = '';
        this.fecha = '';
        this.hora = '';
        this.lugar = '';
        this.costo = '';
      });
    }
  }

  closeDate() {
    this.dateError = false;
  }

  closeSuccess() {
    this.success = false;
  }
}
