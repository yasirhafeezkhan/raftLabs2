class ChessPosition {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// possible knight moves
function findMoves(position: ChessPosition): ChessPosition[] {
  const moves: ChessPosition[] = [];
  const possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  for (const move of possibleMoves) {
    const newX = position.x + move[0];
    const newY = position.y + move[1];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      moves.push(new ChessPosition(newX, newY));
    }
  }

  return moves;
}

//initial position of the knight
const x = 2;
const y = 3;

const startPos = new ChessPosition(x, y);
const possibleMoves = findMoves(startPos);

console.log("Possible moves for the knight:");
for (const move of possibleMoves) {
  console.log(`(${move.x}, ${move.y})`);
}

console.log("=== he is ");
