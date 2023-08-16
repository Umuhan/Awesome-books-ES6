const addBookToList = (book) => {
  const list = document.querySelector('.display-books-container');
  const displayBook = document.createElement('div');
  displayBook.classList.add('display-book');
  displayBook.innerHTML = `
    <h4>${book.title}</h4>
    <h5>${book.author}</h5>
    <button class="delete">Remove</button>`;
  list.appendChild(displayBook);
};

export default addBookToList;
