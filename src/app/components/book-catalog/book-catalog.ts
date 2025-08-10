import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-catalog',
  standalone: true,
  imports: [MatTableModule, AsyncPipe],
  templateUrl: './book-catalog.html',
  styleUrl: './book-catalog.scss',
})
export class BookCatalog implements OnInit {

  books$!: Observable<Book[]>;
  columnsToDisplay = ['title', 'author', 'year'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.books$ = this.http.get<Book[]>('/books.json');
  }
}