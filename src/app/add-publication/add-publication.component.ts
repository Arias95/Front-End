import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Skill } from '../models/skill';
import { PublicationService } from '../publication.service';

import * as YouTubeVideoId from 'youtube-video-id';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  private loggedUser: string;
  private skills: Skill[];

  private dataReady = false;
  private youtube = false;
  private github = false;
  private fileUpload = false;
  private success = false;

  private title: string;
  private habilidad: string;
  private descripcion: string;
  private recursos = [];
  private videoID: string;
  private repoURL: string;

  constructor(
    private userServ: UserService,
    private publicationServ: PublicationService
  ) { }

  ngOnInit() {
    this.userServ.currentUser.subscribe(response => {
      this.loggedUser = response;
      this.userServ.getSkillsUser(response).subscribe(res => {
        this.skills = res;
        this.dataReady = true;
      });
    });
  }

  showYouTube() {
    this.fileUpload = false;
    this.github = false;
    this.youtube = true;
  }

  showGithub() {
    this.youtube = false;
    this.fileUpload = false;
    this.github = true;
  }

  showFileUpload() {
    this.github = false;
    this.youtube = false;
    this.fileUpload = true;
  }

  closeYouTube() {
    this.youtube = false;
  }

  closeGithub() {
    this.github = false;
  }

  closeFile() {
    this.fileUpload = false;
  }

  addVideo() {
    const resource = {
      tipo: 'video',
      dato: YouTubeVideoId(this.videoID)
    };
    this.recursos.push(resource);
    this.videoID = '';
    this.youtube = false;
    console.log(this.recursos);
  }

  addRepo() {
    const resource = {
      tipo: 'link',
      dato: this.repoURL
    };

    this.recursos.push(resource);
    this.repoURL = '';
    this.github = false;
  }

  closeSuccess() {
    this.success = false;
  }

  post() {
    const req = {
      titulo: this.title,
      carnet: this.loggedUser,
      habilidad: this.habilidad,
      descripcion: this.descripcion,
      recursos: this.recursos
    };

    this.publicationServ.post(req).subscribe(response => {
      this.success = true;
      this.title = '';
      this.habilidad = '';
      this.descripcion = '';
      this.recursos = [];
      this.videoID = '';
      this.repoURL = '';
    });
  }
}
