import { Injectable } from '@angular/core';
import {todo} from "./types";
import {TODOS} from "./mock-todos";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
getTodos(): todo[] {
  return TODOS;
}

  constructor(private messageService: MessageService) { }
}
