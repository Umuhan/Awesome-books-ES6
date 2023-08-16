const showAlert = (message, className) => {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.library-container');
  const form = document.querySelector('.input-container');
  container.insertBefore(div, form);

  // vanish in 3 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 1000);
};

export default showAlert;
