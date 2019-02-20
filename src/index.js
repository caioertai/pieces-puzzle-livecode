// Select all the tds (pieces)
const pieces = document.querySelectorAll('td');

const isAdjacent = (piece) => {
  // Get x and y of the piece
  const pieceX = piece.cellIndex;
  const pieceY = piece.parentElement.rowIndex;

  // Get the empty space
  // Get x and y of the empty space
  const space = document.querySelector('.empty');
  const spaceX = space.cellIndex;
  const spaceY = space.parentElement.rowIndex;

  // Check if they are in the same column
  const isSameX = pieceX === spaceX;
  // Check if they are in the same row
  const isSameY = pieceY === spaceY;

  // Check if they are in the adj column
  const isAdjX = pieceX === spaceX + 1 || pieceX === spaceX - 1;
  // Check if they are in the adj row
  const isAdjY = pieceY === spaceY + 1 || pieceY === spaceY - 1;

  // Check if either of both combinations of adj and same match
  // Return a boolean with the result
  return (isSameX && isAdjY) || (isSameY && isAdjX);
};

const swapWithSpace = (piece) => {
  // Get the space
  const space = document.querySelector('.empty');
  // Get the number of the piece
  const number = piece.innerText;

  // Add this number to the space
  space.innerText = number;
  // Remove class empty from space
  space.classList.remove('empty');

  // Add class empty to piece
  piece.classList.add('empty');
  // Remove the number from piece
  piece.innerText = '';
};

const isVictorious = () => {
  let currentOrderString = '';
  // Take every piece
  // NOTE: How could we improve this with a map instead of forEach?
  pieces.forEach((piece) => {
    // Get the text from each and
    // concatenate it to the currentOrderString
    currentOrderString += `${piece.innerText},`;
  });
  // Compare the orderString to the winningString
  const winningString = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,,';
  return winningString === currentOrderString;
};

// Iterate over the pieces
pieces.forEach((piece) => {
  // Add a click listener to each piece
  piece.addEventListener('click', (event) => {
    const currentPiece = event.currentTarget;
    // Check if it's adjacent to the empty space
    if (isAdjacent(currentPiece)) {
      // When adjacent swap it to the empty space
      swapWithSpace(currentPiece);
    }

    // Check (after the movement) for the winning condition
    if (isVictorious()) {
      // Display a winning message
      alert('Victory! You win!');
    }
  });
});
