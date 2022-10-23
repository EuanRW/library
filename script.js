//#region BOOK LOGIC
let myLibrary = [];

function Book(title, author, pages, read, displayed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.displayed = displayed;
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
}

//#endregion

//#region APP Functions
function createParaElement(text, classTitle) {
  const para = document.createElement("p");
  const node = document.createTextNode(text);
  para.appendChild(node);

  para.className = classTitle;
  return para;
}

function displayLibrary(library) {
  const bookGrid = document.getElementById("bookGrid");

  const nonDisplayedBooks = library.filter(val => val.displayed === false);

  for (let i = 0; i < nonDisplayedBooks.length; i++) {
    const book = nonDisplayedBooks[i];

    //Create a new grid item.
    const bookGridItem = document.createElement("div");
    bookGridItem.className = "bookGridItem";
    bookGrid.appendChild(bookGridItem);

    //Create elements for book attribute text.
    const titlePara = createParaElement(book.title, "bookTitle");
    const authorPara = createParaElement(book.author, "bookAuthor");
    const pagesPara = createParaElement(`Pages: ${book.pages}`, "bookPages");
    const readPara = createParaElement((book.read) ? 'Status: Read' : 'Status: Unread', "bookReadStatus");

    //Create delete icon
    const deletePara = createParaElement('❌', 'deleteIcon')
    deletePara.addEventListener('click', (event) => {
      bookGridItem.remove()
    })

    //Add book attribute text elements to new book grid item.
    bookGridItem.appendChild(titlePara);
    bookGridItem.appendChild(authorPara);
    bookGridItem.appendChild(pagesPara);
    bookGridItem.appendChild(readPara);

    bookGridItem.appendChild(deletePara);

    book.displayed = true
  }
}

function createMockData() {
  const book1 = new Book("The Hobit", "J.R.R Tolkien", 310, false, false);
  const book2 = new Book("A Promised Land", "Barrack Obama", 700, false, false);
  const book3 = new Book(
    "All Quiet On The Western Front",
    "Erich Maria Remarque",
    200,
    false,
    false
  );

  addBookToLibrary(book1);
  addBookToLibrary(book2);
  addBookToLibrary(book3);
}

//#endregion

//#region NEW BOOK MODAL
// Get the modal
const newBookModal = document.getElementById("addBookModal");

// Get the button that opens the modal
const addBookBtn = document.getElementById("addBookBtn");

// Get the <span> element that closes the modal
const closeModalSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addBookBtn.onclick = function () {
  newBookModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModalSpan.onclick = function () {
  newBookModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == newBookModal) {
    newBookModal.style.display = "none";
  }
};
//#endregion

//#region NEW BOOK FORM
const formInputs = document.getElementById("bookForm").elements;

const submitNewBookBtn = document.getElementById("submitNewBookBtn");

const inputs = document.getElementsByTagName("input");

let arrTruthChecker = (arr) => arr.every((el) => el === true);

const bookForm = document.querySelector("#bookForm");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let validInputArray = [];

  for (let i = 0; i < inputs.length; i++) {
    validInputArray.push(inputs[i].checkValidity());
  }

  if (arrTruthChecker(validInputArray) == true) {
    const book = new Book(
      formInputs.bookTitle.value,
      formInputs.bookAuthor.value,
      formInputs.bookPages.value,
      formInputs.bookReadStatus.value,
      false
    );
    addBookToLibrary(book);

    displayLibrary(myLibrary);

    newBookModal.style.display = "none";
    console.log(myLibrary);
  } else {
    //Do nothing.
  }
});

//#endregion

createMockData();
displayLibrary(myLibrary);
