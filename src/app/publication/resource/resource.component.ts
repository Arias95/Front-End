import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../resource.service';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  @Input() private publicationId: number;
  private resources: Resource[];

  constructor(private resourceServ: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  getResources(): void {
    this.resourceServ.getResources(this.publicationId)
      .subscribe(response => {
        this.resources = response;
      }, err => {
        console.log('Error en recursos');
        console.log(err);
      });
  }

}
