import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Showallnotes } from './showallnotes/showallnotes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Showallnotes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDoProj');
}
