let deleteButtonHandler = () => {
  var inDeleteMode = false;

  return () => {
    console.log('This at least entered!');
    if(inDeleteMode === false){
      let todoItems = document.getElementsByClassName('todoItem');
      for(let i = 0; i < todoItems.length; i++){
        todoItems[i].className = 'todoItem inDeleteMode';
      }
      inDeleteMode = true;
    }
    else{
      console.log('detected state change!');
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
