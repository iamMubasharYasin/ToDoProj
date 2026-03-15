import { Component } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-edittask',
  imports: [ReactiveFormsModule],
  templateUrl: './edittask.html',
  styleUrl: './edittask.css',
})
export class Edittask implements OnInit {

constructor(private route: ActivatedRoute) {}
    taskId : Number = 0;
    EditTaskFrom = new FormGroup(
      {
        Title: new FormControl(''),
        Details: new FormControl(''),
        Status: new FormControl(''),
      }
    );
  ngOnInit(): void {
    this.taskId = this.route.snapshot.params['id'];


    const DataFromEndPoint = {}
    this.EditTaskFrom.patchValue(DataFromEndPoint);
    //console.log(this.taskId);
  }

  onsubmit() : void {
    console.log('Form Updated');
  }

}
