import {Component, OnInit} from '@angular/core';
import {Task} from './models/Task';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Your personal TodoList';

  constructor() {
  }

  ngOnInit(): void {
  }


}
