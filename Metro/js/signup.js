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

function displaySuccessMessage(infoObject){
  Swal.fire({
    title: 'Sign up successfully!',
    icon: 'success',
    html: `<div>
      <div>
        <strong>Name: </strong>${infoObject.name}
      </div>
      <div>
        <strong>Email: </strong>${infoObject.email}
      </div>
    </div>`,
    showConfirmButton: false
  })
}

function checkPassword(password, confirmedPassword){
  // TODO: check if password length less than 8, write the condition for the if statement inside ()
  if(password.length < 8){
    displayErrorMessage('Password must be at least 8 characters')
    return 
  }

  // TODO: check if password must contain at least one number, write the condition for the if statement inside ()
  if(!
    (password.includes(0) 
    || password.includes(1) 
    || password.includes(2) 
    || password.includes(3) 
    || password.includes(4) 
    || password.includes(5) 
    || password.includes(6)
    || password.includes(7)
    || password.includes(8)
    || password.includes(9)
    )
  ){
    displayErrorMessage('Password must contain at least one number')
    return 
  }

  // TODO: check if password is the same as confirm password, write the condition for the if statement inside ()
  if(password != confirmedPassword){
    displayErrorMessage("Password and confirm password should match")
    return 
  }
  
  return true 
}

// TODO: use getElementById to get form element and assign to variable
const form = document.getElementById("myForm")

function handleSubmitForm(e){
  e.preventDefault()

  // Get value of an input from the form with formula form[id].value or form[name].value

  // get name 
  const name = form['name'].value

  // TODO: get email 
  const email = form['email'].value

  // TODO: get password 
  const password = form['password'].value

  // TODO: get confirm password 
  const confirmedPassword =  form['confirm_password'].value

  // Check if password and confirmedPassword are valid 
  if(!checkPassword(password,confirmedPassword)){
    return 
  }

  // TODO: creat userInfo Object with 3 keys and corresponding values: name, email, job
  const userInfo = {
    name: name,
    email: email,
    password: password
  }

  let users = JSON.parse(localStorage.getItem('users'))

  if(!users){
    users = []
  }

  for(user of users){
    if(user.email == userInfo.email){
      displayErrorMessage("Email has already been registered!")
      return 
    }
  }

  users.push(userInfo)

  localStorage.setItem('users', JSON.stringify(users))
  
  localStorage.setItem('currentUser', JSON.stringify(userInfo))

  displaySuccessMessage(userInfo)
  window.location.href = './index.html'
}

// listen to onsubmit event of the form 
form.onsubmit = handleSubmitForm
