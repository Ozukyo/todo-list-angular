import {Component, OnInit} from '@angular/core';
import {Task} from '../models/Task';
import {TaskService} from '../services/task.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  styles: [`
    .check {
      text-decoration: line-through;
    }
  `]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task = new Task();

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });

  }

  onDelete(task: Task): void {
    console.log('delete ' + task.title);
    // Remove from UI
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    // Remove from server
    this.taskService.deleteTask(task).subscribe();
  }

  onAdd(taskToAdd: Task): void {
    this.taskService.addTask(taskToAdd).subscribe(task => {
      this.tasks.push(task);
    });
  }

  onSelect(selectedTask: Task): void {
    this.selectedTask = selectedTask;
    console.log(selectedTask);
  }

  onEdit(task: Task): void {
    this.selectedTask = task;
  }

  sendTaskToListEventHandler(task: Task): void {
    this.taskService.updateTask(task).subscribe(task => {
      this.tasks.forEach((el, index, array) => {
        if (el.id === task.id) {
          array[index].title = task.title;
          array[index].status = task.status;
        }
      });
    });
    this.selectedTask = null;
  }

  onFilter(searchedWord: string): void {
    this.taskService.filterTasks(searchedWord).subscribe(tasks => {
        this.tasks = tasks;
      }
    );

  }

  onToggle(task: Task): void {
    task.status = 'done';
    this.taskService.toggleDone(task).subscribe();
  }
}
