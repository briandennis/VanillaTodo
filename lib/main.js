'use strict';

var createItem = function createItem(text, priority) {
  var item = document.createElement('div');
  var content = document.createElement('h2');

  content.innerHTML = text;
  item.appendChild(content);
  item.class = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);
};

createItem('Hello, world!');