import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  courses = [
    { name: 'Trekking', path: '/courses/rocky/umal'},
    { name: 'Photography', path: ['/courses','photo','try']},
    { name: 'Travelling', path: ['/courses','travel','hobby']},
  ];

  ngOnInit() {
  }

}
