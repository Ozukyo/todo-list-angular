import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../models/Task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @Input() selectedTask: Task;
  @Output() sendTaskToListEvent: EventEmitter<NgForm> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendTaskToList(taskForm: NgForm): void {
    this.sendTaskToListEvent.emit(taskForm.value);
  }
}
