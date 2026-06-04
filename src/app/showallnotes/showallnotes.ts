import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showallnotes',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './showallnotes.html',
  styleUrls: ['./showallnotes.css'], // <-- correct
})
export class Showallnotes implements OnInit {

  apiendpoint = "https://localhost:7269/api/ToDo/GetItems";
  ListOfNotes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(): void {
    this.http.get<any[]>(this.apiendpoint).subscribe({
      next: (res) => {
        console.log(res);
        this.ListOfNotes = res;
      },
      error: (err) => {
        console.log('Cannot fetch data', err);
      }
    });
  }
}
