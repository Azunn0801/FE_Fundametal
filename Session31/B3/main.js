const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('click', function() {
    const color = this.dataset.color;

    document.body.style.backgroundColor = color;
  });
});