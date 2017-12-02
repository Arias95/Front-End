import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Publication } from '../models/publication';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  private loggedUser: string;
  private posts: Publication[];

  constructor(
    private userServ: UserService
  ) { }

  ngOnInit() {
    this.userServ.currentUser.subscribe(response => {
      this.loggedUser = response;
      this.getPosts();
    });
  }

  getPosts() {
    this.userServ.getPosts(this.loggedUser).subscribe(response => {
      this.posts = response;
    });
  }
}
