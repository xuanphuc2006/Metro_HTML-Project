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
async function getProduct(db) {
  const usersCol = collection(db, 'products'); // Lấy thông tin của collection users
  const userSnapshot = await getDocs(usersCol); // Lấy document của collection users
  const userList = userSnapshot.docs.map(doc => doc.data()); // 
  return userList;
}
async function addProduct(db, product) {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function updateProduct(db, document, newValue) {
  await setDoc(doc(db, 'products', document.id), newValue);
}
let Product = await getProduct(db)
const List = document.getElementById("cart-items")

for(let cart of Product) {
  const newHtml = `<div class="cart-row">
  <span class="cart-item1 cart-header1 cart-column1">${cart.name}</span>
  <span class="cart-item1 cart-header1 cart-column1">${cart.price}$</span>
  <span class="cart-quantity1 cart-header1 cart-column1"><a href="./Edit Item.html"><i class=" optionsicon fa-lg fas fa-edit"></i></a><i class=" optionsicon fa-lg fas fa-trash-alt"></i></span></div>
  </div>`
List.innerHTML += newHtml
}

{/* <div class="cart-row">
  <span class="cart-item1 cart-header1 cart-column1">${Product.name}</span>
  <span class="cart-item1 cart-header1 cart-column1">${Product.price}</span>
  <span class="cart-quantity1 cart-header1 cart-column1">OPTIONS</span>
</div> */}