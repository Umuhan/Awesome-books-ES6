import { getBooks } from './localStorage.js';
import addBookToList from './addBookToList.js';

const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => addBookToList(book));
};

export default displayBooks;
