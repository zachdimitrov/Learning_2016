function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]),
        board = {},
        move;

    var qmoves = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1]
    ];

    var bmoves = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1]
    ];

    var boardBegin = coor('a1'),
        boardEnd = {};

    boardEnd.row = rows - 1;
    boardEnd.col = cols - 1;

    for (let j = 1; j <= rows; j++) {
        let line = params[rows + 2 - j];
        for (let k = 0; k < cols; k++) {
            let cell = {};
            let pos = '' + String.fromCharCode(97 + k) + j;
            let figure = line[k];
            board[pos] = figure;
        }
    }

    for (let i = 0; i < tests; i++) {
        move = params[rows + 3 + i].split(' ');
        let start = coor(move[0]),
            fin = coor(move[1]);
        //console.log(` ----------------------- ${i}\n${move}\n{${start.row}, ${start.col}} - {${fin.row}, ${fin.col}}`);
        if (board[move[0]] === '-') {
            console.log('no');
        } else if (board[move[1]] !== '-') {
            console.log('no');
        } else if (board[move[0]] === 'Q') {
            makeMoves(start, fin, qmoves, 'Q');
        } else if (board[move[0]] === 'K') {
            makeMoves(start, fin, bmoves, 'K');
        }
    }

    function makeMoves(initial, fin, pmoves, figure) {
        let steps = [],
            start = initial;

        for (let u in pmoves) {
            steps = [];
            start = initial;
            //console.log(u);
            do {
                //console.log(start);
                if (start.col === fin.col && start.row === fin.row) {
                    if (figure === 'Q') {
                        for (let s in steps) {
                            if (board[boardSign(steps[s])] !== '-') {
                                console.log('no');
                                return;
                            }
                        }
                    }
                    console.log('yes');
                    return;
                }
                start = gogo(start, pmoves[u]);
                //console.log(`        * ${pmoves[u]} *`);
                steps.push(start);

            } while (start.row <= boardEnd.row && start.col <= boardEnd.col &&
                start.row >= boardBegin.row && start.col >= boardBegin.col);
        }
        console.log('no');
    }

    function gogo(pos, pieceMove) {
        let newpos = {};
        newpos.row = pos.row + pieceMove[0];
        newpos.col = pos.col + pieceMove[1];
        return newpos;
    }

    function boardSign(pos) {
        let sign = '';
        sign = '' + String.fromCharCode(97 + pos.col) + (pos.row + 1);
        return sign;
    }

    function coor(str) {
        let c = {};
        c.row = +str[1] - 1;
        c.col = str.charCodeAt(0) - 97;
        return c;
    }
}

// tests

console.log('========== TEST 1 ==========');

solve([
    '3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3'
]);