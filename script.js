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
  myLibrary.push(book);

  const bookGrid = document.getElementById("bookGrid");

  const bookGridItem = document.createElement("div");
  bookGridItem.className = "bookGridItem"

  bookGrid.appendChild(bookGridItem);

  //title
  const titlePara = document.createElement("p");
  const titleNode = document.createTextNode(book.title);
  titlePara.appendChild(titleNode);
  titlePara.className = "bookTitle"

  //author
  const authorPara = document.createElement("p");
  const authorNode = document.createTextNode(book.author);
  authorPara.appendChild(authorNode);
  authorPara.className = "bookAuthor"

  //page count
  const pagesPara = document.createElement("p");
  const pagesNode = document.createTextNode("Pages: " + book.pages);
  pagesPara.appendChild(pagesNode);
  pagesPara.className = "bookPages"

  //read status
  const readPara = document.createElement("p");
  const readNode = document.createTextNode(book.read);
  readPara.appendChild(readNode);
  readPara.className = "bookReadStatus"

  bookGridItem.appendChild(titlePara);
  bookGridItem.appendChild(authorPara);
  bookGridItem.appendChild(pagesPara);
  bookGridItem.appendChild(readPara);


}

const book1 = new Book("The Hobit", "J.R.R Tolkien", 310, false);
const book2 = new Book("A Promised Land", "Barrack Obama", 700, false);
const book3 = new Book(
  "All Quiet On The Western Front",
  "Erich Maria Remarque",
  200,
  false
);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
