let createItem = (text, priority) => {
  let item = document.createElement('div');
  let content = document.createElement('h2');

  content.innerHTML = text;
  item.appendChild(content);
  item.className = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);
};

let addItem = () => {
  let text = window.prompt();
  if(text)
    createItem(text);
};

createItem('Hello, world!');
