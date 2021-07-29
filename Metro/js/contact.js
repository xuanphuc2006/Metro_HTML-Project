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