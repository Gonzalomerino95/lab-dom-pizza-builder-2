// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  let stateArr = Object.entries(state);

  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(stateArr);
  renderPrice(stateArr);
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((indvPepperoni) => {
    if (state.pepperoni) {
      indvPepperoni.style.visibility = 'visible';
    } else {
      indvPepperoni.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((indvMushroom) => {
    if (state.mushrooms) {
      indvMushroom.style.visibility = 'visible';
    } else {
      indvMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((indvPepper) => {
    if (state.greenPeppers) {
      indvPepper.style.visibility = 'visible';
    } else {
      indvPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons(ingredientState) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttonClass = '';

  ingredientState.forEach(([ingredient, isActive]) => {
    switch (ingredient) {
      case 'pepperoni':
        buttonClass = '.btn-pepperoni';
        break;
      case 'mushrooms':
        buttonClass = '.btn-mushrooms';
        break;
      case 'greenPeppers':
        buttonClass = '.btn-green-peppers';
        break;
      case 'whiteSauce':
        buttonClass = '.btn-sauce';
        break;
      case 'glutenFreeCrust':
        buttonClass = '.btn-crust';
        break;
    }

    let buttonIngredient = document.querySelector(buttonClass);

    if (isActive) {
      buttonIngredient.classList.add('active');
    } else {
      buttonIngredient.classList.remove('active');
    }
  });
}

function renderPrice(ingredientState) {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //console.log("Render Price Funct")
  let price;
  let totalPrice = 10;
  let position;
  let displayName;
  let ingredientList = document.querySelectorAll('.panel.price li');

  ingredientState.forEach(([ingredient, isActive]) => {
    switch (ingredient) {
      case 'pepperoni':
        price = 1;
        position = 0;
        displayName = 'pepperoni';
        break;

      case 'mushrooms':
        price = 1;
        position = 1;
        displayName = 'Mushrooms';
        break;

      case 'greenPeppers':
        price = 1;
        position = 2;
        displayName = 'Green peppers';
        break;

      case 'whiteSauce':
        price = 3;
        position = 3;
        displayName = 'White sauce';
        break;

      case 'glutenFreeCrust':
        price = 5;
        position = 4;
        displayName = 'Gluten-free crust';
        break;
    }

    if (isActive) {
      totalPrice += price;
      ingredientList[position].style.display = '';
      ingredientList[position].textContent = `$${price} ${displayName}`;
    } else {
      ingredientList[position].style.display = 'none';
    }
  });

  //console.log("Total Price", totalPrice)

  let totalPriceDomElement = document.querySelector('.panel.price strong');
  totalPriceDomElement.innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
