//Book logic
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  const readText = this.read ? "completed reading." : "have not read yet.";

  return (
    this.title +
    " by " +
    this.author +
    ", " +
    this.pages +
    " pages, " +
    readText
  );
};

const book1 = new Book("The Hobit", "J.R.R Tolkien", 310, false);

myLibrary.push(book1);
console.log(myLibrary)