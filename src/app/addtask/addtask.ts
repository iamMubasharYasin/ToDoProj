import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css',
})
export class Addtask {

  AddTaskForm = new FormGroup(
    {
      Title: new FormControl(''),
      Details : new FormControl(''),
      Status : new FormControl('')
    }
  );
  onSubmit(): void
  {
    console.log("Form Submitted");

    console.log(this.AddTaskForm.value);
  }
}
