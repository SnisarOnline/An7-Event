import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/services/_api.service';

@Component({
  selector: 'app-products',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.styl']
})
export class ProjectsComponent implements OnInit{

  base:any;

  constructor(private apiService: ApiService) {
    console.log('START CONSTRUCTOR ProjectsComponent');
  }

  ngOnInit() {
    this.apiService.list('').subscribe(response => {
      console.log('apiService.list = ', response);
      this.base = response.results;
    });
    setTimeout( () => {
        console.log( 'this.base = ', this.base );
      }, 1000
    );
  }
}
