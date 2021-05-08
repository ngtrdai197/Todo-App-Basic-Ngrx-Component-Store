import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo-App-NgrxComponent-store';
  public todoName = '';

  public onSubmit(todo: string): void {
    this.todoName = todo;
  }
}
