import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        text: 'ToDo number 1',
        completed: false
      },
      {
        id: 2,
        text: 'ToDo number 2',
        completed: true
      }
    ]

    console.log(this.todos);
  }

}
