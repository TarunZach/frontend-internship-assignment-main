import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';


@Component({
  selector: 'front-end-internship-assignment',
  templateUrl: './home.component.html',
  styleUrls: ['./homecomp.css','./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];
  searchQuery = '';
  searchResults: any[] = [];
  loading = false;
  error = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search() {
    if (this.searchQuery.trim() !== '') {
      this.loading = true;
      this.error = false;
      this.searchResults = [];

      const url = `https://openlibrary.org/search.json?q=${this.searchQuery}&limit=10`;
      this.http.get(url).subscribe(
        (data: any) => {
          this.searchResults = data.docs;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.error = true;
        }
      );
    }
  }
}
