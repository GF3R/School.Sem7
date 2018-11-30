import {Book} from '../../logic/book';
import {Component, Input, OnInit} from '@angular/core';
import {BOOK_DATA} from "../../logic/import_bookdata";

@Component({
    selector: 'stuff',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    @Input()

    books: Book[];
    selectedBook: Book;
    keywords: string;

    constructor() {
        this.books = BOOK_DATA;
    }

    searchBooks() {
        this.books = BOOK_DATA;
        this.books = this.books.filter(book => book.title.toLowerCase().includes(this.keywords.toLowerCase()));
    }


    ngOnInit() {
    }

}
