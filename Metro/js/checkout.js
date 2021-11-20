import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { doc, getFirestore, collection, getDocs, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDsbnvT30rajihtSFpl3NTK64Qt3JzOWA",
  authDomain: "metro-6c5b7.firebaseapp.com",
  projectId: "metro-6c5b7",
  storageBucket: "metro-6c5b7.appspot.com",
  messagingSenderId: "35846079387",
  appId: "1:35846079387:web:ccdce0733ae1624673173e",
  measurementId: "G-WZM8824LT0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

let cart = JSON.parse(localStorage.getItem("cart")) || []
let products = JSON.parse(localStorage.getItem("products")) || []

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

export async function uploadCart() {
  try {
    let bill = {
      user_email: currentUser.email
    }
    const docRef = await addDoc(collection(db, "bills"), bill);
    console.log("Document written with ID: ", docRef.id);
    for (let item of cart){
      item["bill_id"] = docRef.id;
      const docRefChild = await addDoc(collection(db, "bill_items"), item)
    }
    deleteItem()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

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

const totalPriceContainer = document.getElementById("cart-total-price")
totalPriceContainer.textContent = `$${totalPrice.toFixed(2)}`
