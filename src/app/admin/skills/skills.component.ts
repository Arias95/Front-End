import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Category } from '../../models/category';
import { NewSkill } from '../../models/new-skill';
import { Skill } from '../../models/skill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private dataReady = false;
  private skillsReady = false;
  private successSkill = false;
  private alertCategoryFailure = false;
  private successCategory = false;
  private categories: Category[];
  private skills: Skill[];
  private name: string;
  private category: string;
  private categoryName: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getAllSkills();
  }

  getCategories() {
    this.userService.getCategories().subscribe(response => {
      this.categories = response;
      this.dataReady = true;
    });
  }

  addSkill() {
    const newSkill = new NewSkill();
    const skill = {
      nombre: this.name
    };
    newSkill.categoria = this.category;
    newSkill.habilidad = this.name;

    this.skills.push(skill);
    this.userService.addSkill(newSkill).subscribe(response => {
      this.successSkill = true;
      this.name = '';
      this.category = '';
    });
  }

  categoryChange(newCountry) {
    this.getSkills(newCountry);
  }

  getSkills(category: string) {
    this.userService.getSkillsCat(category).subscribe(response => {
      this.skills = response;
      this.skillsReady = true;
    });
  }

  getAllSkills() {
    this.userService.getSkills().subscribe(response => {
      this.skills = response;
      this.skillsReady = true;
    });
  }

  addCategory() {
    this.userService.addCategory(this.categoryName).subscribe(response => {
      this.successCategory = true;
      this.categoryName = '';
    }, err => {
      this.alertCategoryFailure = true;
      this.categoryName = '';
    });
  }
  closeSuccess() {
    this.successSkill = false;
  }

  closeSuccessCategory() {
    this.successCategory = false;
  }

  closeAlertCategoryFailure() {
    this.alertCategoryFailure = false;
  }

  report() {
    this.router.navigate(['/admin']);
  }

  addUni() {
    this.router.navigate(['/addUni']);
  }

  addSkills() {
    this.router.navigate(['/addSkills']);
  }
}
