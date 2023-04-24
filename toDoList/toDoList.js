const button = document.querySelector('.input-container button');
const input  = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () =>{
  const li = document.createElement('li');
  li.className='todo-list-item'
  const deleteBtn = document.createElement('button');
 deleteBtn.innerText ='✖';
  li.innerText= input.value;
  list.appendChild(li);
  li.appendChild(deleteBtn);
  input.value="";

  deleteBtn.addEventListener('click', () =>{
    list.removeChild(li);
  });
});

// Execute a function when the user presses a key on the keyboard
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});