import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {FormsModule} from "@angular/forms";
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      NgbPaginationModule,
      NgbAlertModule,
      NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
