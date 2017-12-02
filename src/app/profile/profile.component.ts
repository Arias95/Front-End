import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() carnet: string;
  private user: User;
  private isDataAvailable = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUser(this.carnet).then(result => {
      this.user = result[0];
    })
    .catch(err => console.log('Error cargando perfil'));
  }

  getUser(user: string): Promise<User[]> {
    return this.userService.getUserData(user);
  }

  logout() {
    this.router.navigate(['']);
  }

  post() {
    this.router.navigate(['/addPost']);
  }

  tutoria() {
    this.router.navigate(['/addTutoria']);
  }

  mySkills() {
    this.router.navigate(['/mySkills']);
  }

}
