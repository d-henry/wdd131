const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
})


button.addEventListener('click', function() {
  // Code to execute when the element is clicked.

  // Check if the input is empty; if it is not empty, then ...
  if (input.value.trim() !== '') {
    // Call displayList with the input.value argument
    displayList(input.value);
    // Push the input.value into the chaptersArray
    chaptersArray.push(input.value);
    // Update the localStorage with the new array by calling a function named setChapterList
    setChapterList();
    // Set the input.value to nothing
    input.value = '';
    input.focus();

  }
});

function displayList(item) {

    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    // note the use of the displayList parameter 'item'
    li.textContent = item;
    deleteButton.textContent = '❌';
    // this references the CSS rule .delete{width:fit-content;} to size the delete button
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function() {
      // Code to execute when the delete button is clicked.
      list.removeChild(li);
      // note this new function that is needed to remove the chapter from the array and LocalStorage
      deleteChapter(li.textContent);
      // set the focus back to the input
      input.focus();
    });
    console.log('I have eyeballs that can read and i like understanding the code. I also dont like same line comments because it makes my code unreadable');
}

function setChapterList() {
  // set the localStorage item to the item we have already named. also stringify the array before saving.
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  // retrieve the localStorage item. use JSON.parse to convert it back
  return JSON.parse(localStorage.getItem('myFavBOMList'));

}

function deleteChapter(chapter) {
  // reformat the chapter parameter to get rid of the X that is passed on the end of the string when we used the deleteChapter function. use string.slice to extract the last character.
  chapter = chapter.slice(0, chapter.length - 1);

  // redefine the chaptersArray using the array.filter method to return all but the chapter being removed.
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // call the setChapterList function to update the localStorage item.
  setChapterList();
}

