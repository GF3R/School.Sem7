import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../logic/book";
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../catalog.service";

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
    @Input()
    private book: Book;
    private route: ActivatedRoute;


    constructor(private catalogserivce: CatalogService) {
    }

    ngOnInit() {
    /*
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.catalogserivce.searchBooks(id).then(books =>{
                this.book = books[0];
            }).catch(error => {
                console.log(error);
            });
        });
        */
    }

    public orderBook(): void {

    }

    @Output()
    public back = new EventEmitter();

}
