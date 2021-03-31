import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/ToDo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  // Get Todos
  getTodos():Observable<ToDo []> {
    return this.http.get<ToDo []>(this.todosUrl);
  }
}
