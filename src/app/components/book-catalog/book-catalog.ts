import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-catalog',
  imports: [],
  templateUrl: './book-catalog.html',
  styleUrl: './book-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCatalog {

}
