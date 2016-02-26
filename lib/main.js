'use strict';

var deleteButtonHandler = function deleteButtonHandler() {
  var inDeleteMode = false;

  return function () {
    console.log('This at least entered!');
    if (inDeleteMode === false) {
      var todoItems = document.getElementsByClassName('todoItem');
      for (var i = 0; i < todoItems.length; i++) {
        todoItems[i].className = 'todoItem upForDeletion';
      }
      inDeleteMode = true;
    } else {
      console.log('detected state change!');
    }
  };
};

var removeItem = function removeItem(event) {
  var itemToDelete = event.target.parentNode;
  itemToDelete.parentNode.removeChild(itemToDelete);
};

var createItem = function createItem(text, priority) {
  var item = document.createElement('div');
  var content = document.createElement('h2');
  var button = document.createElement('button');

  button.innerHTML = 'X';
  button.style.fontSize = '1.2em';
  button.className = 'itemButton';
  button.addEventListener('click', removeItem);

  content.innerHTML = text;
  item.appendChild(content);
  item.appendChild(button);
  item.className = 'todoItem delete';
  document.getElementById('todoContainer').appendChild(item);
};

var addItem = function addItem() {
  var text = window.prompt();
  if (text) createItem(text);
};

createItem('Hello, world!');

var deleteButtonMode = new deleteButtonHandler();

document.getElementById('deleteNotes').addEventListener('click', deleteButtonMode);