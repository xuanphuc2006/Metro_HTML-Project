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
} else {
  signOutElement.hidden = true
}

const products = JSON.parse(localStorage.getItem('products'))

const listContainer = document.getElementById("list__items")
products.forEach(product => {
  const html = `<div class="col-md-3">
                  <div class="card mb-4 product-wap rounded-0">
                      <div class="card rounded-0">
                          <img class="shop-item-image card-img rounded-0 img-fluid" src=${product.imgUrl}>
                      </div>
                      <div class="card-body">
                          <span id=${product.id} class="h3 text-decoration-none shop-item-title text-dark" style="cursor: pointer;">${product.name}</span>
                          <p style="text-align:center !important; margin-bottom: 20px !important;" class="card-text shop-item-price text-danger"> <b>$${product.price}</b></p>
                          <button id=${product.id} type="button" class="btn btn-dark cart-btn">Add to cart</button>
                      </div>
                  </div>
                </div>`

  listContainer.innerHTML += html;
  
});

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

for(title of titles) {
  title.onclick = (e) => {
    const targetId = e.target.id 
    localStorage.setItem("currentView", targetId);
    window.location.assign('./shop-single.html')
  }
}