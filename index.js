// Write your code here...

/*CHALLENGE 2 */
let FirstMenuItem;

/*****CHALLENGE 1  */
// Fetch all the menu items from
//parse the JSON DATA file
// loop though menu items array with forEach
//within the loop, we will be going through each menu item
//find the parent div and append the span to it

let firstMenuItem;

fetch('http://localhost:3002/menu')
    .then(resp => resp.json())
    .then(menuItems => menuItems.forEach(menuItem => {
        firstMenuItem = menuItems[0]

        const menuItemSpan = document.createElement('span')
        menuItemSpan.textContent = menuItem.name

        //challenge 3
        menuItemSpan.addEventListener('click',(event) => {
          renderMenuItem(menuItem)
        })

        document.querySelector('#menu-items').append(menuItemSpan)
    }))
    .then(() => {
        // TODO add to screen
        //Challenge 2
        renderMenuItem(firstMenuItem)

      //challenge 4
      const cartForm = document.querySelector('#cart-form')
      cartForm.addEventListener('submit',(event) => {
        event.preventDefault()

      const cartInput = document.querySelector('#cart-amount')
      const numberInCart = document.querySelector('#number-in-cart')

      const cartAmount = parseInt(numberInCart.textContent)
      const addAmount = parseInt(cartInput.value)
      numberInCart.textContent = cartAmount + addAmount
      })
    })

function renderMenuItem(menuItem) {
    const img = document.querySelector('#dish-image')
    img.src = menuItem.image

    const dishH3 = document.querySelector('#dish-name')
    dishH3.textContent = menuItem.name

    const dishDesc = document.querySelector('#dish-description')
    dishDesc.textContent = menuItem.description

    const dishPrice = document.querySelector('#dish-price')
    dishPrice.textContent = menuItem.price
}
/*CHALLENGE 3 */
function renderMenuItems(menuItem) {
  const img = document.querySelector('#dish-image')
  img.src = menuItem.image

  const dishH3 = document.querySelector('#dish.name')
  dishH3.textContent = menuItem.name

  const dishDesc = document.querySelector('#dish-description')
  dishDesc.textContent = menuItem.description

  const dishPrice = document.querySelector('#dish-price')
  dishPrice.textContent = menuItem.price

}

