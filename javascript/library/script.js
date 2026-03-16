const myLibrary = [];

function Book(title, author, pages, readFlag) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (readFlag == true) {
    this.readFlag = "Read";
  } else {
    this.readFlag = "Not read";
  }
}

function addBookToLibrary(title, author, pages, readFlag) {
  const newBook = new Book(title, author, pages, readFlag);
  myLibrary.push(newBook);
}

addBookToLibrary();

const cardContainer = document.querySelector(".cards-container");

function renderCard(book) {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.dataset.id = book.id;
  newCard.textContent = `
    ${book.title}
    ${book.author}
    ${book.pages} pages
  `;
  const readStatus = document.createElement("p");
  readStatus.textContent = book.readFlag;
  newCard.appendChild(readStatus);

  const changeStatus = document.createElement("button");
  changeStatus.textContent = "Change Status";
  newCard.appendChild(changeStatus);
  cardContainer.appendChild(newCard);
  changeStatus.addEventListener("click", () => {
    const index = myLibrary.findIndex((book) => book.id === newCard.dataset.id);
    myLibrary[index].toggleRead();

    readStatus.textContent = myLibrary[index].readFlag;
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  newCard.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    const index = myLibrary.findIndex((book) => book.id === newCard.dataset.id);

    if (index > -1) {
      // Only splice if the item is found
      myLibrary.splice(index, 1); // 2nd parameter means remove one item only
    }

    newCard.remove();
  });
}

const openButton = document.querySelector(".addnewbook");
const dialog = document.getElementById("my-dialog");
const closeButton = document.querySelector("#close-dialog-button");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const addButton = document.querySelector("#addbutton");
addButton.addEventListener("click", () => {
  saveInputs();
});

function saveInputs() {
  // Get the input elements
  const BookInput = document.getElementById("Book");
  const AuthorInput = document.getElementById("Author");
  const PagesInputs = document.getElementById("Pages");

  const StatusInputs = document.getElementsByName("Status");
  let selectedValue;

  for (const radio of StatusInputs) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  addBookToLibrary(
    BookInput.value,
    AuthorInput.value,
    PagesInputs.value,
    selectedValue === "true",
  );

  renderCard(myLibrary[myLibrary.length - 1]); // render the newly added book
  dialog.close();
}

Book.prototype.toggleRead = function () {
  if (this.readFlag === "Read") {
    this.readFlag = "Not read";
  } else {
    this.readFlag = "Read";
  }
};
