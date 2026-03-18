import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css',
})
export class Addtask {

  constructor(private http: HttpClient) { }

  AddTaskForm = new FormGroup(
    {
      Title: new FormControl(''),
      Details: new FormControl(''),
      Status: new FormControl('')
    }
  );
  onSubmit(): void {
    this.http.post('https://localhost:7269/api/ToDo/AddItems', this.AddTaskForm.value).subscribe(
      {
        next: (res) => {
          console.log('Task added successfully');
        },
        error: (res) => {
          console.error('Error adding task', +res);
        }
      }
    );
  }
}
