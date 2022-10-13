function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readText;
    if (read) {
      readText = "completed reading.";
    } else {
      readText = "have not read yet.";
    }
    return title + " by " + author + ", " + pages + " pages, " + readText;
  };
}

const book1 = new Book("The Hobit", "J.R.R Tolkien", 295, true);
console.log(book1.info()); // logs 'steve'
