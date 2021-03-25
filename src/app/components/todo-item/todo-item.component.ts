import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  todo!: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
