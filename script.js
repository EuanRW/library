function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
    let readText;
    if (this.read) {
      readText = "completed reading.";
    } else {
      readText = "have not read yet.";
    }
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readText;
  };

const book1 = new Book("The Hobit", "J.R.R Tolkien", 295, true);
console.log(book1.info()); // logs 'steve'
