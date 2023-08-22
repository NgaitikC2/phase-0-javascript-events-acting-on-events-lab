document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });

  
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left) || 0;
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  

  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left) || 0;
  
    if (left + 40 <= 400) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  