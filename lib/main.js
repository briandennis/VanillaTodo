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
  var button = document.createElement('button');

  button.innerHTML = '<span class=\'deleteButtonText\'>X</span>';
  button.style.fontSize = '1.2em';
  button.style.color = 'black';
  button.className = 'itemButton';

  content.innerHTML = text;
  item.appendChild(content);
  item.appendChild(button);
  item.className = 'todoItem delete';
  item.click(deleteButton.update);
  document.getElementById('todoContainer').appendChild(item);
};

var addItem = function addItem() {
  var text = window.prompt();
  if (text) createItem(text);
};

createItem('Hello, world!');