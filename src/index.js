// Select all pieces
const pieces = document.querySelectorAll('td');

// Check if piece can move
const isMovable = (piece) => {
  const pieceX = piece.cellIndex;
  const pieceY = piece.parentElement.rowIndex;

  const emptyPiece = document.querySelector('.empty');
  const emptyX = emptyPiece.cellIndex;
  const emptyY = emptyPiece.parentElement.rowIndex;

  const isOnSameRow = pieceX == emptyX;
  const isOnSameColumn = pieceY == emptyY;
  const isOnAdjRow = pieceX == emptyX -1 || pieceX == emptyX +1
  const isOnAdjColumn = pieceY == emptyY -1 || pieceY == emptyY +1

  // console.log(isOnSameRow, isOnSameColumn, isOnAdjColumn, isOnAdjRow);
  console.log('Hello2');
}








// Set piece click behaviour
pieces.forEach((piece) => {
  piece.addEventListener('click', () => {
    console.log(piece);
    isMovable(piece);
  });
});

console.log(543634);
