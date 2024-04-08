import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  taskTitle = 'Read cup of coffee';
  isComplete = false;
  coins = 0;
  title = 'aprendendo-angular';

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

  completeTask() {
    this.isComplete = true;
  }

  updateCoins() {
    this.coins++;
  }
}
