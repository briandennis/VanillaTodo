let deleteButton = {
  state: 0,
  update: function(){
    console.log('This is at least running!');
    if(this.state === 0){
      this.state = 1;
    }
    else{
      let deleteList = document.getElementsByClassName('delete');
      while(deleteList.length > 0){
        let curr = deleteList[0];
        console.log('Deleting: ' + curr.innerHTML);
        curr.parentNode.removeChild(curr);
      }
      this.state = 0;
    }
  }
};

let createItem = (text, priority) => {
  let item = document.createElement('div');
  let content = document.createElement('h2');
  let button = document.createElement('button');

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

let addItem = () => {
  let text = window.prompt();
  if(text)
    createItem(text);
};

createItem('Hello, world!');
