const form = document.getElementById("myForm")

const currentUser = JSON.parse(localStorage.getItem('currentUser'))

if(currentUser){
  window.location.href = './index.html'
}


function displayErrorMessage(title){
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonColor: '#3ac162'
  })
}

function displaySuccessMessage(title){
  Swal.fire({
    title,
    icon: 'success',
    showConfirmButton: false
  })
}

function handleSubmitForm(e){
  e.preventDefault()

  // Lấy thông tin đăng nhập của người dùng từ form input (email và password)
  const emailInput = form['email'].value 
  const passwordInput = form['password'].value

  // Lấy thông tin account có sẵn trong localStorage có key là 'user'
  let users = JSON.parse(localStorage.getItem("users"))

  if(!users){
    users = []
  }

  let userIndexFound = users.findIndex(user => user.email === emailInput)
  
  if(userIndexFound === -1){
    displayErrorMessage("User not found!")
    return 
  } 

  if(users[userIndexFound].password != passwordInput){
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

form.onsubmit = handleSubmitForm