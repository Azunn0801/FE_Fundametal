const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginBtn');

const correctUsername = 'huanrose@gmail.com';
const correctPassword = '123456';

loginButton.addEventListener('click', function() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === correctUsername && password === correctPassword) {
    console.log('Đăng nhập thành công');
  } else {
    console.log('Đăng nhập thất bại');
  }
});