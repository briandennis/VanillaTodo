'use strict';

var deleteButtonHandler = function deleteButtonHandler() {
  var inDeleteMode = false;

  return function () {
    console.log('This at least entered!');
    var todoItems = document.getElementsByClassName('todoItem');
    if (inDeleteMode === false) {
      for (var i = 0; i < todoItems.length; i++) {
        todoItems[i].className = 'todoItem inDeleteMode';
      }
      inDeleteMode = true;
    } else {
      for (var i = todoItems.length - 1; i >= 0; i--) {
        var curr = todoItems[i];
        if (curr.className.includes('delete')) {
          curr.remove();
        } else {
          curr.className = 'todoItem';
        }
      }
      inDeleteMode = false;
      document.activeElement.blur();
    }
  };
};

var removeItem = function removeItem(event) {
  var itemToDelete = event.target.parentNode;
  var itemsContainer = itemToDelete.parentNode;
  itemsContainer.removeChild(itemToDelete);

  if (itemsContainer.childNodes.length === 0) {
    deleteButton.reset();
  }
};

var deleteButton = {

  inDeleteMode: false,

  reset: function reset() {
    undefined.inDeleteMode = false;
    document.activeElement.blur();
  },

  toggleMode: function toggleMode() {
    console.log('This at least entered!');
    var todoItems = document.getElementsByClassName('todoItem');
    if (todoItems.length === 0) return;
    if (this.inDeleteMode === false) {
      for (var i = 0; i < todoItems.length; i++) {
        todoItems[i].className = 'todoItem inDeleteMode';
      }
      this.inDeleteMode = true;
    } else {
      for (var i = todoItems.length - 1; i >= 0; i--) {
        var curr = todoItems[i];
        if (curr.className.includes('delete')) {
          curr.remove();
        } else {
          curr.className = 'todoItem';
        }
      }
      this.inDeleteMode = false;
      document.activeElement.blur();
    }
  }
};

var checkDelete = function checkDelete(event) {
  console.log('omg, this ran!');
  var item = event.target;
  if (item.className.includes('inDeleteMode')) {
    item.className = 'todoItem delete';
    document.getElementById('deleteNotes').focus();
  } else if (item.className.includes('delete')) {
    item.className = 'todoItem inDeleteMode';
    document.getElementById('deleteNotes').focus();
  }
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
  item.className = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);

  item.addEventListener('click', checkDelete);
};

var addItem = function addItem() {
  var text = window.prompt();
  if (text) createItem(text);
};

window.onload = function () {
  console.log('page loaded');

  createItem('Hello, world!');

  var deleteButtonMode = new deleteButtonHandler();

  document.getElementById('deleteNotes').addEventListener('click', deleteButton.toggleMode);
};