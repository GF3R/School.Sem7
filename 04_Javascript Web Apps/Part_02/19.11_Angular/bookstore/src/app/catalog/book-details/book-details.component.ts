import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../logic/book";

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    @Input()
    public book: Book;

    constructor() {
    }

    ngOnInit() {
    }

    @Output()
    public back = new EventEmitter();

}
