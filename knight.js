var ChessPosition = /** @class */ (function () {
    function ChessPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    return ChessPosition;
}());
// possible knight moves
function findMoves(position) {
    var moves = [];
    var possibleMoves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];
    for (var _i = 0, possibleMoves_2 = possibleMoves; _i < possibleMoves_2.length; _i++) {
        var move = possibleMoves_2[_i];
        var newX = position.x + move[0];
        var newY = position.y + move[1];
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            moves.push(new ChessPosition(newX, newY));
        }
    }
    return moves;
}
//initial position of the knight
var x = 2;
var y = 3;
var startPos = new ChessPosition(x, y);
var possibleMoves = findMoves(startPos);
console.log("Possible moves for the knight:");
for (var _i = 0, possibleMoves_1 = possibleMoves; _i < possibleMoves_1.length; _i++) {
    var move = possibleMoves_1[_i];
    console.log("(".concat(move.x, ", ").concat(move.y, ")"));
}
console.log("=== he is ");
