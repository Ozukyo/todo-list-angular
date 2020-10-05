import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Task} from '../models/Task';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  dataUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.dataUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.dataUrl}/${task.id}`, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.dataUrl, task, httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.dataUrl}/${task.id}`, task, httpOptions);
  }

  filterTasks(searchWord: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.dataUrl}?title_like=${searchWord}`);
  }

  toggleDone(task: Task): Observable<Task> {
    task.status = 'done';
    return this.http.patch<Task>(`${this.dataUrl}/${task.id}`, task, httpOptions);
  }
}
