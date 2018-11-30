class Book {
  isbn: string;
  authors: string;
  title: string;
  price: number;
  publisher: string;
  publicationYear: number;
  binding: Bookbinding;
  numberOfPages: number;
  description: string;
  imageUrl: string;

  constructor(isbn: string, authors: string, title: string, price: number, publisher: string, publicationYear: number, binding: Bookbinding, pages: number, description: string, imageUrl: string) {
    this.isbn = isbn;
    this.authors = authors;
    this.title = isbn;
    this.price = price;
    this.publisher = publisher;
    this.publicationYear = publicationYear;
    this.binding = binding;
    this.numberOfPages = pages;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
  
 