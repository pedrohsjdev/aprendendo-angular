import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  taskTitle = 'Read cup of coffee';
  taskList = ['Read cup of coffee', 'Buy a new book', 'Read a new book'];
  isComplete = false;
  coins = 0;
  title = 'aprendendo-angular';
  hasAdminPrivileges = false;

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

  completeTask() {
    this.isComplete = true;
  }

  updateCoins() {
    this.coins++;
  }

  addAdminPrivileges() {
    this.hasAdminPrivileges = true;
  }

  removeAdminPrivileges() {
    this.hasAdminPrivileges = false;
  }
}
