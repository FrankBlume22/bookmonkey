import { Component, OnInit} from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';  // Neu hinzu gekommen

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];   // ACHTUNG : Abweichung von der Vorlage im Buch = books: Book[];

  constructor(private bs: BookStoreService){}
  // Wir nutzen den Zugriffsmodifier "private", und das Property "bs" wird
  // automatisch deklariert UND initialisert (Constructor Injection)

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.bs.getAll().subscribe(res => this.books = res);
    // Der Konstruktor hat bereits das Objekt "bs" des Service BookStoreService aufgebaut.
    // Wir abonnieren das Observable der Büchertabelle
  }
}
