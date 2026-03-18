import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-showallnotes',
  imports: [HttpClientModule],
  templateUrl: './showallnotes.html',
  styleUrl: './showallnotes.css',
})
export class Showallnotes implements OnInit {

  apiendpoint = "https://localhost:7269/api/ToDo/GetItems";
  ListOfNotes: any[] = [];

  constructor(private http: HttpClient) { }

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