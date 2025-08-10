import { Routes } from '@angular/router';
import { BookCatalog } from './components/book-catalog/book-catalog';

export const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', component: BookCatalog },
    { path: 'books/:id', loadComponent: () => 
      import('./components/book-detail/book-detail').then(m => m.BookDetail) },
    { path: '**', redirectTo: 'books' }
];