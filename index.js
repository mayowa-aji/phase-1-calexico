//declare all global variables
const container = document.querySelector('#container')
const menu = document.querySelector('#menu')
const menuItems = document.querySelector('#menu-items')
const dish = document.querySelector('#dish')
const dishImage = document.querySelector('#dish-image')
const dishText = document.querySelector('#dish-text')
const dishName = document.querySelector('#dish-name')
const dishDescription = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')
const numberInCart = document.querySelector('#number-in-cart')
const cartForm = document.querySelector('#cart-form')
const cartAmount = document.querySelector('#cart-amount')
const addAmount = parseInt(cartAmount.value || 0)
const cartTotal = parseInt(numberInCart.textContent)


//add fetch
fetch('http://localhost:3000/menu')
  .then(response => response.json())
  .then((data) => {
    renderMenuItems(data)
    renderFirstItem(data[0])
    })

//get all food items
function renderMenuItems(menuItemsArray) {
  menuItemsArray.forEach(data => renderMenuItem(data));
}

//single food item
function renderMenuItem(menuObj) {
  const menuItem = document.createElement('span')
  menuItem.textContent = menuObj.name

  menuItem.addEventListener('click', () => {
     renderFirstItem(menuObj)
})

  menuItems.append(menuItem)
}

function renderFirstItem(menuObj) {
  dishImage.src = menuObj.image
 dishName.textContent = menuObj.name
  dishDescription.textContent = menuObj.description
  dishPrice.textContent = `$${menuObj.price}`

}

function submitForm() {
  cartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    numberInCart.textContent = parseInt(numberInCart.textContent) + parseInt(cartAmount.value)


  })
}
submitForm()



