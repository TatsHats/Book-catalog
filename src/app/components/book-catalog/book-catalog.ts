import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddBookModal } from '../add-book-modal/add-book-modal';

@Component({
  selector: 'app-book-catalog',
  standalone: true,
  imports: [
    MatTableModule, 
    AsyncPipe, 
    ReactiveFormsModule, 
    MatDialogModule],
  templateUrl: './book-catalog.html',
  styleUrl: './book-catalog.scss',
})
export class BookCatalog implements OnInit {

  books: Book[] = [];
  searchBooks: Book[] = [];
  columnsToDisplay = ['title', 'author', 'year'];
  searchControl = new FormControl('');

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.http.get<Book[]>('/books.json').subscribe(data => {
      this.books = data;
      this.searchBooks = data;
    });

    this.searchControl.valueChanges.subscribe(search => {
      const term = (search || '').toLowerCase();
      this.searchBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        String(book.year).includes(term)
      );
    });
  }

  public openDetail(id: string): void {
    this.router.navigate(['/book-detail', id]);
  }

  public openModal(): void {
    const dialogRef = this.dialog.open(AddBookModal, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((book: Book | undefined) => {
      if (book) {
        this.books = [...this.books, book];
        this.searchBooks = this.books;
      }
    });
  }
}