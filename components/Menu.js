// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
//creating the list items
const createMenuButtons = (buttontext) => {
  const menuButton = document.createElement('li');
  menuButton.textContent = buttontext;
  return menuButton;
};

//creating the menu maker component
const menuMaker = (buttons) => {

  //create the div & assign it the menu class
  const menu = document.createElement('div');
  menu.className = 'menu';

  
  const menuItems = document.createElement('ul'); //create the UL element
  const menuButtons = buttons.map(createMenuButtons); //create an array of menu buttons with menu item names

  menu.append(menuItems); //add the UL element to the div
  menuItems.append(...menuButtons); //add the list items from the array to the UL

  return menu;
};


const menuObj = menuMaker(menuItems);

const body = document.querySelector('body');
body.append(menuObj);

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => menuObj.classList.toggle('menu--open'));

//menu animation
gsap.to(".menu-button", {duration: 3, rotation: 360, scale: 0.5, repeat: -1, repeatDelay: 3});