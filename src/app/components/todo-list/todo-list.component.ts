import { Component, Inject, OnInit } from '@angular/core';
import { browser } from 'protractor';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoListService } from 'src/app/services/todolistservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: ToDo[] = [];

  constructor(private todoservice: ToDoListService) {}

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todos => {this.todos = todos})
    console.log(this.todos);
  }

}
