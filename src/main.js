let createItem = (text, priority) => {
  let item = document.createElement('div');
  let content = document.createElement('h2');

  content.innerHTML = text;
  item.appendChild(content);
  item.class = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);
};

createItem('Hello, world!');
