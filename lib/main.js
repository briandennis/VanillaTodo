'use strict';

var deleteButton = {
  state: 0,
  update: function update() {
    console.log('This is at least running!');
    if (this.state === 0) {
      this.state = 1;
    } else {
      var deleteList = document.getElementsByClassName('delete');
      while (deleteList.length > 0) {
        var curr = deleteList[0];
        console.log('Deleting: ' + curr.innerHTML);
        curr.parentNode.removeChild(curr);
      }
      this.state = 0;
    }
  }
};

var createItem = function createItem(text, priority) {
  var item = document.createElement('div');
  var content = document.createElement('h2');

  content.innerHTML = text;
  item.appendChild(content);
  item.className = 'todoItem delete';
  item.click(deleteButton.update);
  document.getElementById('todoContainer').appendChild(item);
};

var addItem = function addItem() {
  var text = window.prompt();
  if (text) createItem(text);
};

createItem('Hello, world!');