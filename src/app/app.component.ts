import { Component } from '@angular/core';

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

  firstTask = {
    description: "Finish weekend Angular homework for Epicodus course."
  }
}
