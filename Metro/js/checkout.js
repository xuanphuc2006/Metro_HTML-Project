const currentUser = JSON.parse(localStorage.getItem('currentUser'))

const signOutElement = document.getElementById('signout-link')

if(currentUser){
  const signInElement = document.getElementById('signin-link')
  signInElement.hidden = true
  
  document.querySelector('.hello-text').textContent = `Welcome, ${currentUser.name}`

  signOutElement.onclick = () => {
    localStorage.removeItem('currentUser')
    signInElement.hidden = false 
    signOutElement.hidden = true
    document.querySelector('.hello-text').textContent = ''
  }
}else{
  signOutElement.hidden = true
}

let cart = JSON.parse(localStorage.getItem("cart")) || []
let products = JSON.parse(localStorage.getItem("products")) || []

const ordersList = document.getElementById("cart-items")

let totalPrice = 0

for(let order of cart){
  const item = products.find(product => product.id == order.itemId)
  const newHtml = `<div style="display: flex;">
    <div class="cart-item">${item.name}</div>
    <div class="cart-price">$${item.price}</div>
    <div class="cart-quantity">${order.quantity}</div>
  </div>`
  ordersList.innerHTML += newHtml
  totalPrice += (order.quantity * item.price)
}
function displaySuccessMessage(title){
  Swal.fire({
    title,
    icon: 'success',
    showConfirmButton: false
  })
}
function deleteItem() {
  displaySuccessMessage('Thank you for your purchase')
  localStorage.removeItem("cart");
  window.setTimeout(function(){location.reload()},2500)
}
const totalPriceContainer = document.getElementById("cart-total-price")
totalPriceContainer.textContent = `$${totalPrice.toFixed(2)}`
