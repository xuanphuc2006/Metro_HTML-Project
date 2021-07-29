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

const productsData = [
  {
    id: 0,
    name: 'Soft Drink',
    price: 6.99,
    imgUrl: './assets/img/9704123662366.jpg'
  },
  {
    id: 1,
    name: '100% Natural Spring Water, Pure Life',
    price: 10.00,
    imgUrl: './assets/img/9703076397086.jpg'
  },
  {
    id: 2,
    name: 'Red Tomatoes',
    price: 2.89,
    imgUrl: './assets/img/9276942450718.jpg'
  },
  {
    id: 3,
    name: 'Jumbo Papaya',
    price: 5.97,
    imgUrl: './assets/img/8872793473054.jpg'
  },
  {
    id: 4,
    name: 'Red Seedless Grapes',
    price: 6.59,
    imgUrl: './assets/img/8872793440286.jpg'
  },
  {
    id: 5,
    name: 'Strawberry',
    price: 5.00,
    imgUrl: './assets/img/Strawberries.jpg'
  },
  {
    id: 6,
    name: 'Boneless and Skinless Chicken Breasts, Value Pack',
    price: 10.07  ,
    imgUrl: './assets/img/9267705151518.jpg'
  },
  {
    id: 7,
    name: 'New Zealand Lamb Shoulder Blade Chop, Value Pack',
    price: 13.90,
    imgUrl: './assets/img/9233957421086.jpg'
  },
  {
    id: 8,
    name: 'Smoked Classic Cut Bacon',
    price: 4.44 ,
    imgUrl: './assets/img/9186926821406.jpg'
  },
  {
    id: 9,
    name: 'New Zealand Lamb Shoulder Arm Chop, Value Pack',
    price: 13.58,
    imgUrl: './assets/img/9233957093406.jpg'
  },
  {
    id: 10,
    name: 'Soft Drink',
    price: 12.00,
    imgUrl: './assets/img/9704123662366.jpg'
  },
  {
    id: 11,
    name: 'Soft Drink',
    price: 24.00,
    imgUrl: './assets/img/10045005070366.jpg'
  },
  {
    id: 12,
    name: 'Sweet Potato',
    price: 1.32,
    imgUrl: './assets/img/8874213408798.jpg'
  },
  {
    id: 13,
    name: 'Iceberg Lettuce',
    price: 2.49,
    imgUrl: './assets/img/8907061887006.jpg'
  },
  {
    id: 14,
    name: 'Banana',
    price: 0.29,
    imgUrl: './assets/img/8872795308062.jpg'
  },
  {
    id: 15,
    name: 'Raspberries',
    price: 3.99,
    imgUrl: './assets/img/9952777928734.jpg'
  },  
  {
    id: 16,
    name: 'Green Beans',
    price: 6.59,
    imgUrl: './assets/img/GreenBeans.jpg'
  },
  {
    id: 17,
    name: 'Rutabaga',
    price: 2.64,
    imgUrl: './assets/img/Rutabaga.jpg'
  },
  {
    id: 18,
    name: 'White Potato',
    price: 1.49,
    imgUrl: './assets/img/WhitePotato.jpg'
  },
  {
    id: 19,
    name: 'Yellow Onions<',
    price: 2.49,
    imgUrl: './assets/img/YellowOnions.jpg'
  },
  {
    id: 20,
    name: 'Celery',
    price: 2.99,
    imgUrl: './assets/img/Celery.jpg'
  },
  {
    id: 21,
    name: 'Hothouse Orange Pepper',
    price: 2.64,
    imgUrl: './assets/img/HothouseOrangePepper.jpg'
  },
  {
    id: 22,
    name: 'Red Onion',
    price: 1.65,
    imgUrl: './assets/img/RedOnion.jpg'
  },
  {
    id: 23,    
    name: 'Red Cluster Tomatoes',
    price: 2.89 ,
    imgUrl: './assets/img/Addtoyourfavourites.jpg'
    
  },
  {
    id: 24,
    name: '100% Pure Orange Juice without Pulp',
    price: 4.99,
    imgUrl: './assets/img/111.jpg '
  },
  {
    id: 25,
    name: 'Original Vegetable Juice, Garden Cocktail',
    price: 2.99,
    imgUrl: './assets/img/OriginalVegetableJuice,GardenCocktail.jpg'
  },
  {
    id: 26,
    name: 'Unsweetened Vanilla Almond Beverage',
    price: 4.69 ,
    imgUrl: './assets/img/UnsweetenedVanillaAlmondBeverage.jpg'
  },
  {
    id: 27,
    name: 'Sweet Apple Cider',
    price: 4.99,
    imgUrl: './assets/img/SweetAppleCider.jpg'
  },
  {
    id: 28,
    name: 'Original Coffee Beans',
    price: 18.99,
    imgUrl: './assets/img/OriginalCoffeeBeans.jpg'
  },
  {
    id: 29,
    name: 'Pure Breakfast® Orange Juice with Added Vitamin C, Classic',
    price: 1.99,
    imgUrl: './assets/img/PureBreakfast®OrangeJuicewithAddedVitaminC,Classic.jpg'
  },
  {
    id: 30,
    name: 'Orange, Peach & Mango Juice and Purée Blend',
    price: 2.99,
    imgUrl: './assets/img/123.jpg'
  },
  {
    id: 31,
    name: 'Lemon Flavoured Iced Tea',
    price: 2.99,
    imgUrl: './assets/img/LemonFlavouredIcedTea.jpg'
  },
  {
    id: 32,
    name: 'Coconut Water Beverage with Pulp',
    price: 0.99,
    imgUrl: './assets/img/333.jpg'
  },
  {
    id: 33,
    name: 'Strawberry',
    price: 5.00,
    imgUrl: './assets/img/large_9db8f23f-adf3-4243-aea9-afca49eff70f.jpg'
  },
  {
    id: 34,
    name: 'Root Veggie Burger Patties',
    price: 5.99,
    imgUrl: './assets/img/HIL_1000x1000_RootVeggie_12boxes_620x.jpg'
  },
  {
    id: 35,
    name: 'Zero Ultra Energy Drink',
    price: 5.50,
    imgUrl: './assets/img/0007084702972.jpg'
  }
]

localStorage.setItem('products', JSON.stringify(productsData));


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