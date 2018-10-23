import { Component } from '@angular/core';
import { Task } from './models/task.models.ts'

@Component({
  selector: 'to-do',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  currentFocus: string = 'Angular Homework';

  firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course.");
}
