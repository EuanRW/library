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

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const book1 = new Book("The Hobit", "J.R.R Tolkien", 310, false);
const book2 = new Book("A Promised Land", "Barrack Obama", 700, false);
const book3 = new Book("All Quiet On The Western Front", "Erich Maria Remarque", 200, false)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)