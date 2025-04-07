const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});