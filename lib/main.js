'use strict';

var createItem = function createItem(text, priority) {
  var item = document.createElement('div');
  var content = document.createElement('h2');

  content.innerHTML = text;
  item.appendChild(content);
  item.className = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);
};

var addItem = function addItem() {
  var text = window.prompt();
  if (text) createItem(text);
};

createItem('Hello, world!');