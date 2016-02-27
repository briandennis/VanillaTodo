let deleteButtonHandler = () => {
  var inDeleteMode = false;

  return () => {
    console.log('This at least entered!');
    let todoItems = document.getElementsByClassName('todoItem');
    if(inDeleteMode === false){
      for(let i = 0; i < todoItems.length; i++){
        todoItems[i].className = 'todoItem inDeleteMode';
      }
      inDeleteMode = true;
    }
    else{
      for(let i = todoItems.length - 1; i >= 0; i--){
        let curr = todoItems[i];
        if(curr.className.includes('delete')){
          curr.remove();
        }
        else{
          curr.className = 'todoItem';
        }
      }
      inDeleteMode = false;
      document.activeElement.blur();
    }
  };
};

let removeItem = (event) => {
  let itemToDelete = event.target.parentNode;
  itemToDelete.parentNode.removeChild(itemToDelete);
};

let checkDelete = function(event){
  console.log('omg, this ran!');
  let item = event.target;
  if(item.className.includes('inDeleteMode')){
    item.className = 'todoItem delete';
    document.getElementById('deleteNotes').focus();
  }
  else if (item.className.includes('delete')){
    item.className = 'todoItem inDeleteMode';
    document.getElementById('deleteNotes').focus();
  }
};

let createItem = (text, priority) => {
  let item = document.createElement('div');
  let content = document.createElement('h2');
  let button = document.createElement('button');

  button.innerHTML = 'X';
  button.style.fontSize = '1.2em';
  button.className = 'itemButton';
  button.addEventListener('click',removeItem);

  content.innerHTML = text;
  item.appendChild(content);
  item.appendChild(button);
  item.className = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);

  item.addEventListener('click', checkDelete);
};

let addItem = () => {
  let text = window.prompt();
  if(text)
    createItem(text);
};

window.onload = function(){
  console.log('page loaded');

  createItem('Hello, world!');

  let deleteButtonMode = new deleteButtonHandler();

  document.getElementById('deleteNotes').addEventListener('click', deleteButtonMode);
};
