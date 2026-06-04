import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Showallnotes } from './showallnotes/showallnotes';

@Component({
  selector: 'app-root',
  template: `<app-showallnotes></app-showallnotes>`,
  standalone: true,
  imports: [Showallnotes]
})
export class AppComponent {}
export class App {
  protected readonly title = signal('ToDoProj');
}
