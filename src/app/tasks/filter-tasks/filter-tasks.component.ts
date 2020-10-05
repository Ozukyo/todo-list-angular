import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.css']
})
export class FilterTasksComponent {

  @Output() filterTasks: EventEmitter<any> = new EventEmitter();
  searchedWord: string;
  private timeout = 0;

  onInput(): void {
    console.log(this.searchedWord);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.filterTasks.emit(this.searchedWord), 300);
  }
}
