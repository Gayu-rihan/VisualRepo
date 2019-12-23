import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos=[
    {id:10,description:'read for 2hrs',targetDate:new Date()},
    {id:20,description:'Practise program for 1hrs',targetDate:new Date()},
  ];

  constructor() { }

  ngOnInit() {
  }

}
