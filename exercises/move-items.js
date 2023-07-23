/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll('.item');
console.log(allItems);



/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here
const main = document.getElementById('main');
console.log(main);



/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.getElementById('favs');
console.log(favs);



/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here
function updateCollections(id, direction) {
  //store individual item element
  const item = document.getElementById(id);
  //if the item is in 'main' move to 'favs'
  if (direction === 'toFavs') {
    //move to favs
    favs.appendChild(item);
    //remove current icon
    item.querySelector('i').classList.remove('fa-heart-circle-plus');
    //add new icon
    item.querySelector('i').classList.add('fa-heart-crack');
    //if the item is in 'favs' move to 'main'
  } else if (direction === 'toMain') {
    //move to main
    main.appendChild(item);
    //remove current icon
    item.querySelector('i').classList.remove('fa-heart-crack');
    //add original icon back onto element
    item.querySelector('i').classList.add('fa-heart-circle-plus');
  }
}



/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...
//loop through all items in the allItems nodelist
allItems.forEach((item => {
  //listen for click on a item
  item.addEventListener('click', () => {
    //turn item id number into an integer from a string
    const itemId = parseInt(item.id);
    //access parent container with the parent container's id
    const itemParentId = item.parentNode.id;
    //check what container the item is moving from and to
    const direction = itemParentId === 'main' ? 'toFavs' : 'toMain';
    //updateCollections function takes the id of element clicked and the current container the element is in and move it to other container
    updateCollections(itemId, direction);
  });
}));