import {Component, OnInit} from '@angular/core';
import {todo} from "../types";
import {TODOS} from "../mock-todos";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: todo[] = [];
  selectTodo?: todo;

  onSelect(todo: todo): void {
    this.selectTodo = todo;
  }

  constructor(private todoService: TodoService) {
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();
  }

}
