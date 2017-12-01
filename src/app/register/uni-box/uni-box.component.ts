import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { University } from '../../models/university';

@Component({
  selector: 'app-uni-box',
  templateUrl: './uni-box.component.html',
  styleUrls: ['./uni-box.component.css']
})
export class UniBoxComponent implements OnInit {
  private dataReady = false;
  private Universities: University[];
  @Output() university = new EventEmitter<string>();
  private selectedUniversity: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUniversities(): void {
    
  }

}
