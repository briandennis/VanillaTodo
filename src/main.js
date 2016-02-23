let createItem = (text, priority) => {
  let item = document.createElement('div');
  let content = document.createElement('h2');

  content.innerHTML(text);
  item.appendChild(contents);
  item.class = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);
  console.log(content);
}


window.onLoad(createItem('It worked!', 0));
