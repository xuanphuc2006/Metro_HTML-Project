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
//products
async function getProduct(db) {
  const usersCol = collection(db, 'products'); // Lấy thông tin của collection users
  const userSnapshot = await getDocs(usersCol); // Lấy document của collection users
  const userList = userSnapshot.docs.map(doc => doc.data()); // 
  return userList;
}
let Product = await getProduct(db)

//users
async function getBills(db) {
  const usersCol = collection(db, 'bills'); // Lấy thông tin của collection users
  const userSnapshot = await getDocs(usersCol); // Lấy document của collection users
  const userList = userSnapshot.docs.map(doc => doc.data()); // 
  return userList;
}
let bills = await getBills(db)

const List = document.getElementById("cart-items")

for(let bill of bills) {
  const newHtml = `<div class="cart-row">
  <span class="cart-item1 cart-header1 cart-column1">${bill.user_email}</span>
  <span class="cart-item1 cart-header1 cart-column1">${bill.total}</span>
  <span class="cart-item1 cart-header1 cart-column1">${bill.created_at}</span>
  </div>`
List.innerHTML += newHtml
}

{/* <div class="cart-row">
  <span class="cart-item1 cart-header1 cart-column1">${Product.name}</span>
  <span class="cart-item1 cart-header1 cart-column1">${Product.price}</span>
  <span class="cart-quantity1 cart-header1 cart-column1">OPTIONS</span>
</div> */}