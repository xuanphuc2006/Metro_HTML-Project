
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

const currentViewId = JSON.parse(localStorage.getItem('currentView')) || 0 
const products = JSON.parse(localStorage.getItem('products')) || []

const currentItem = products.find(item => item.id === currentViewId);

document.getElementById("item_name").textContent = currentItem.name 
document.getElementById("item_price").textContent = `$${currentItem.price}`
document.getElementById("item_img").src = currentItem.imgUrl 
document.getElementById("addToCartButton").innerHTML += `<button id=${currentItem.id} type="button" class="btn btn-dark cart-btn">Add to cart</button>`



const btns = document.getElementsByClassName("cart-btn")

const titles = document.getElementsByClassName("shop-item-title");

for(btn of btns){
  btn.onclick = (e) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const targetId = e.target.id 
    const itemIndex = cart.findIndex(order => order.itemId == targetId)
    if(itemIndex !== -1){
      cart[itemIndex].quantity += 1
    } else {
      cart.push({
        itemId: targetId,
        quantity: 1
      })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

