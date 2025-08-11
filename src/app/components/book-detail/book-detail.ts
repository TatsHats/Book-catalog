import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetail implements OnInit {
  book!: Book;

  constructor(
      private route: ActivatedRoute, 
      private http: HttpClient, 
      private router: Router
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get<Book[]>('/books.json').subscribe(books => {
        this.book = books.find(b => b.id === params['id'])!;
      });
    });
  }

  public openCatalog(): void {
    this.router.navigate(['/books']);
  }
}
