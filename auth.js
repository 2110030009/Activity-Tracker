
let registeredUsers = [];

function registerUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const isRegistered = registeredUsers.some(user => user.email === email);
  if (isRegistered) {
    alert('Email is already registered!');
    return;
  }

  registeredUsers.push({ email, password });
  
  document.getElementById('registerSuccess').style.display = 'block';
}

function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const user = registeredUsers.find(user => user.email === email);
  if (user && user.password === password) {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password!');
  }
}
