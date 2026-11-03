const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')



button.addEventListener('click', function() {
  // Code to execute when the element is clicked.

  // Check to make sure the input is not blank
  if (input.value.trim() !== '') {
    // Code to execute when the input is not empty
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('aria-label', 'Close');
    deleteButton.textContent = '❌';
    
    li.textContent = input.value;
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
      // Code to execute when the delete button is clicked.
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  }
});

