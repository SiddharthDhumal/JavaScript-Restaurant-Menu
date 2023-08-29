const MenuArr = [
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "breakfast",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    name: "Diner Double",
    price: "$13.99",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfathundercats",
    type: "lunch",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$6.99",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    type: "shakes",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    name: "Country Delight",
    price: "$20.99",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    type: "breakfast",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    name: "Egg Attack",
    price: "$22.99",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    type: "lunch",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    name: "Oreo Dream",
    price: "$18.99",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    type: "shakes",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    name: "Bacon Overflow",
    price: "$8.99",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    type: "breakfast",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    name: "American Classic",
    price: "$12.99",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    type: "lunch",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "shakes",
  },
  {
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    name: "Steak Dinner",
    price: "$39.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "dinner",
  },
];

let AllMenu = document.querySelector(".All");
let Breakfast = document.querySelector(".breakfast");
let Lunch = document.querySelector(".lunch");
let Shakes = document.querySelector(".shakes");
let Dinner = document.querySelector(".dinner");
let menuCard = document.querySelector(".menu-card");
// let menuItem = document.querySelector('.menu-items');

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(MenuArr);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` 
       <div class="menu-items">
            <img src="${item.image}" alt="Buttermilk Pancakes" width="150px" height="100px" class="item-image"/>
          <div class="item">
           <div class="item-short-description">
           <h4 class="item-name">${item.name}</h4>
           <span class="item-price">${item.price}</span>
             </div>
           <div class="item-description">${item.description}</div>
         </div>
       </div>
         `;
  });

  // console.log(displayMenu);
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  menuCard.innerHTML = displayMenu;
}

AllMenu.addEventListener("click", function () {
  displayMenuItems(MenuArr);
});

Breakfast.addEventListener("click", function () {
  let breakfastMenu = MenuArr.filter(function (item) {
    return item.type.includes("breakfast");
  });

  displayMenuItems(breakfastMenu);
});

Lunch.addEventListener("click", function () {
  let lunchMenu = MenuArr.filter(function (item) {
    return item.type.includes("lunch");
  });

  displayMenuItems(lunchMenu);
});

Shakes.addEventListener("click", function () {
  let shakesMenu = MenuArr.filter(function (item) {
    return item.type.includes("shakes");
  });

  displayMenuItems(shakesMenu);
});

Dinner.addEventListener("click", function () {
  let dinnerMenu = MenuArr.filter(function (item) {
    return item.type.includes("dinner");
  });

  displayMenuItems(dinnerMenu);
});
