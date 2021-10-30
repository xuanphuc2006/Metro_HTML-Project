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
async function getUser(db) {
  const usersCol = collection(db, 'users'); // Lấy thông tin của collection users
  const userSnapshot = await getDocs(usersCol); // Lấy document của collection users
  const userList = userSnapshot.docs.map(doc => doc.data()); // 
  return userList;
}

// Hàm thêm user vào Firestore (users collection)
async function addUser(db, user) {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function updateUser(db, document, newValue) {
  await setDoc(doc(db, 'users', document.id), newValue);
}

const form = document.getElementById("myForm")

const currentUser = JSON.parse(localStorage.getItem('currentUser'))

if (currentUser) {
  window.location.href = './index.html'
}


function displayErrorMessage(title) {
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonColor: '#3ac162'
  })
}

function displaySuccessMessage(title) {
  Swal.fire({
    title,
    icon: 'success',
    showConfirmButton: false
  })
}

async function handleSubmitForm(e) {
  e.preventDefault()

  // Lấy thông tin đăng nhập của người dùng từ form input (email và password)
  const emailInput = form['email'].value
  const passwordInput = form['password'].value

  // Lấy thông tin account có sẵn trong localStorage có key là 'user'
  let users = await getUser(db)
 
  if (!users) {
    users = []
  }

  let userIndexFound = users.findIndex(user => user.email === emailInput)

  if (userIndexFound === -1) {
    displayErrorMessage("User not found!")
    return
  }

  if (users[userIndexFound].password != passwordInput) {
    displayErrorMessage("Password does not match!")
    return
  } else {
    let currentUser = {
      name: users[userIndexFound].name,
      email: emailInput,
      password: passwordInput
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    displaySuccessMessage("Welcome back!")

    window.location.href = './index.html'
  }

}

form.onsubmit = await handleSubmitForm