import {Book} from '../../logic/book';
import {Component, Input, OnInit} from '@angular/core';
import {BOOK_DATA} from "../../logic/import_bookdata";
import {CatalogService} from "../catalog.service";

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
    error: string;


    constructor(private catalogService: CatalogService) {
        this.books = this.catalogService.getLastSearchResults();
    }

    searchBooks() {
        this.catalogService.searchBooks(this.keywords)
            .then(books => this.books = books)
            .catch(error => this.error = error);
    }

    ngOnInit() {
    }

}
