import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digi-Tutor';
  posts = [{
    title: 'Requerimientos',
    user: 'Madriz',
    desc: 'Apuntes de la clase de Requerimientos.',
    skill: 'Programacion'
  },
  {
    title: 'Algebra Relacional',
    user: 'Marquito',
    desc: 'Apuntes de la clase de Algebra relacional.',
    skill: 'Programacion'
  },
  {
    title: 'Limites',
    user: 'Arias',
    desc: 'Ejercicios para el tema de limites.',
    skill: 'Calculo'
  },
  {
    title: 'Integrales',
    user: 'Arias',
    desc: 'Ejercicios para el tema de integrales.',
    skill: 'Calculo'
  },
  {
    title: 'Derivadas',
    user: 'Arias',
    desc: 'Ejercicios para el tema de derivadas.',
    skill: 'Calculo'
  }];
}
