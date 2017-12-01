import { Component, OnInit, Input } from '@angular/core';
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
    private userService: UserService
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

}
