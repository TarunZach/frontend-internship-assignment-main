import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_BASE_URL = 'https://openlibrary.org/search.json';

  constructor(private http: HttpClient) {}

  searchBooks(query: string) {
    const params = { q: query };
    return this.http.get(`${this.API_BASE_URL}`, { params });
  }
}
