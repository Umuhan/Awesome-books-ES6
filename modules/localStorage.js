// Store
const getBooks = () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  return books;
};

const addBook = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (title) => {
  const books = getBooks();
  const updatedBooks = books.filter((book) => book.title !== title);
  localStorage.setItem('books', JSON.stringify(updatedBooks));
};

export { getBooks, addBook, removeBook };
