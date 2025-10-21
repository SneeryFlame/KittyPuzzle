const pieces = document.querySelectorAll('.piece');
let draggingPiece = null;

pieces.forEach(piece => {
  // --- Suporte desktop ---
  piece.addEventListener('dragstart', (e) => {
    draggingPiece = e.target;
    e.target.classList.add('dragging');
  });

  piece.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
    draggingPiece = null;
  });

  // --- Suporte mobile ---
  piece.addEventListener('touchstart', (e) => {
    draggingPiece = e.target;
    e.target.classList.add('dragging');
  });

  piece.addEventListener('touchmove', (e) => {
    if (!draggingPiece) return;
     e.preventDefault(); // <---- adiciona isso
     
    const touch = e.touches[0];
    draggingPiece.style.position = 'absolute';
    draggingPiece.style.left = `${touch.pageX - draggingPiece.offsetWidth / 2}px`;
    draggingPiece.style.top = `${touch.pageY - draggingPiece.offsetHeight / 2}px`;
  });

  piece.addEventListener('touchend', () => {
    draggingPiece.classList.remove('dragging');
    draggingPiece = null;
  });
});
