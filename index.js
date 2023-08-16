import displayBooks from './modules/displayBooks.js';
import addBookToList from './modules/addBookToList.js';
import { addBook, removeBook } from './modules/localStorage.js';
import clearFields from './modules/clearFields.js';
import deleteBook from './modules/deleteBook.js';
import showAlert from './modules/showAlert.js';
import { DateTime } from './modules/luxon.js';

// Display current date
const currentDate = DateTime.now();
document.getElementById('date').innerHTML = currentDate.toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS,
);

// Event: Display Books
document.addEventListener('DOMContentLoaded', displayBooks);

// Event: Add a Book
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
    showAlert('Please fill in all fields', 'danger');
  } else {
    const book = { title, author };
    addBookToList(book);
    addBook(book);
    clearFields();
  }
});

// Event: Remove a Book
document
  .querySelector('.display-books-container')
  .addEventListener('click', (e) => {
    deleteBook(e.target);
    const bookTitle = e.target.parentElement.firstElementChild.textContent;
    removeBook(bookTitle);
    showAlert('Book Removed successfully', 'success');
  });
