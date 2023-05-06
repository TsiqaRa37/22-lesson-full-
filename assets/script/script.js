const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')
const signInContainer = document.querySelector('.sign-in.authorization-container')
const signUpContainer = document.querySelector('.sign-up.authorization-container')
const signInInputs = document.querySelectorAll('.sign-in.authorization-container input:not(#remember-me)')
const singUpInputs = document.querySelectorAll('.sign-up.authorization-container input')
const signInButton = document.querySelector('#sing-in-button');
const signUpButton = document.querySelector('#sign-up-button');
const users = [];

registerLink.addEventListener('click', () => {
  signInContainer.classList.remove('active')
  signUpContainer.classList.add('active')
})

loginLink.addEventListener('click', () => {
  signUpContainer.classList.remove('active')
  signInContainer.classList.add('active')
})

const singInObject = {
  email: '',
  password: '',
  remember: false
}

const signUpObject = {
  email: '',
  username: '',
  password: '',
  repeat_password: ''
}

const handleSingInInputChange = (event) => {
  singInObject[event.target.name] = event.target.value
}

for (let i = 0; i < signInInputs.length; i++) {
  signInInputs[i].addEventListener('keyup', handleSingInInputChange)
}


signInButton.addEventListener('click', () => {
  const { email, password } = singInObject;
  if (
    !email ||
    email === '' ||
    !password ||
    password === ''
  ) {
    alert('you need to fill all inputs')
    return
  }

  if (email.indexOf('@') < 0) {
    alert('email is in incorrect format')
    return
  }

  if (password.length < 6) {
    alert('password value is too short')
    return
  }

  const foundUserIndex = users.findIndex((item) => {
    return item.email === email && item.password === password
  })

  if (foundUserIndex < 0) {
    alert('user not found')
    return
  } else {
    alert('successfull authorization')
    return
  }

})

const handleRegistration = () => {
  for (let i = 0; i < singUpInputs.length; i++) {
    signUpObject[singUpInputs[i].name] = singUpInputs[i].value
  }
  const { email, username, password, repeat_password } = signUpObject;
  if (password !== repeat_password) {
    alert('passwords are not same')
    return;
  }

  users.push(signUpObject)
  signUpObject.email = ''
  signUpObject.password = ''
  signUpObject.username = ''
  signUpObject.repeat_password = ''
  for (let i = 0; i < singUpInputs.length; i++) {
    singUpInputs[i].value = ''
  }
  alert('successfull registration')
  console.log(users)
}

signUpButton.addEventListener('click', handleRegistration)