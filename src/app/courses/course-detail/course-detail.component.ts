import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  template: '<div> welcome to {{name}} Course</div>'
})
export class CourseDetailComponent implements OnInit {


  name:String = '';
  param;

  constructor(private activateRoute :ActivatedRoute) {

    this.param = this.activateRoute.params.subscribe(
        value => this.name = value['name']
    );
  }
  ngOnInit() {
  }

}
