import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.css']
})
export class FilterTasksComponent implements OnInit {

  @Output() filterTasks: EventEmitter<any> = new EventEmitter();
  searchedWord: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log(this.searchedWord);
    this.filterTasks.emit(this.searchedWord);
  }
}
