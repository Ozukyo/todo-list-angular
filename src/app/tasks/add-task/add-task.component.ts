import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<any> = new EventEmitter();
  title: string;
  status: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(titleToAdd: string): void {
    this.title = titleToAdd;
  }

  onChange($event: any): void {
    this.status = $event.target.options[$event.target.options.selectedIndex].text;
  }

  onSubmitTask(): void {
    const task = {
      title: this.title,
      status: this.status
    };
    this.addTask.emit(task);

  }
}
