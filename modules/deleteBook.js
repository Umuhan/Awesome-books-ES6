const deleteBook = (el) => {
  if (el.classList.contains('delete')) {
    el.parentElement.remove();
  }
};

export default deleteBook;
