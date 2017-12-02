import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SkillReport } from '../models/skill-report';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.css']
})
export class SkillViewComponent implements OnInit {
  private loggedUser: string;
  private reports: SkillReport[];
  private dataReady = false;

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
    this.userServ.getSupports(this.loggedUser).subscribe(response => {
      this.reports = response;
      this.dataReady = true;
    });
  }

}
