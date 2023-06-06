grid = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 7, 0, 0, 0, 0, 3, 1],
[0, 0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0, 5, 0, 0, 9, 0, 6, 0, 0],
[1, 3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0, 0, 5, 2, 0, 6, 3, 0, 0],
];

// { {3, 0, 6, 5, 0, 8, 4, 0, 0},
// {5, 2, 0, 0, 0, 0, 0, 0, 0},
// {0, 8, 7, 0, 0, 0, 0, 3, 1},
// {0, 0, 3, 0, 1, 0, 0, 8, 0},
// {9, 0, 0, 8, 6, 3, 0, 0, 5},
// {0, 5, 0, 0, 9, 0, 6, 0, 0}, 
// {1, 3, 0, 0, 0, 0, 2, 5, 0},
// {0, 0, 0, 0, 0, 0, 0, 7, 4},
// {0, 0, 5, 2, 0, 6, 3, 0, 0} }

function isValidToInsert(row, col, grid, val) {
    // console.log(val)
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] == val || grid[row][i] == val) {
            return false;
        }
    }

    let localBoxRow = row - (row % 3);
    let localBoxCol = col - (col % 3);
    for (let i = localBoxRow; i < localBoxRow + 3; i++) {
        for (let j = localBoxCol; j < localBoxCol + 3; j++) {
            if (grid[i][j] == val) {
                return false;
            }
        }
    }

    return true
}


function solve(grid) {
    for (let row = 0; row < 9; row++) {
        // console.log(row)
        for (let col = 0; col < 9; col++) {
            // console.log(col)
            if (grid[row][col] === 0) {
                for (let i = 1; i < 10; i++) {
                    if (isValidToInsert(row, col, grid, i)) {
                        // console.log(i)
                        grid[row][col] = i;
                        if (solve(grid)) {
                            return true;
                        }
                        grid[row][col] = 0
                    }
                }
                return false
            }
        }
    }
    return true;
}

function createPuzzle(difficulty) {
    let sudoku = [];
    for (let i = 0; i < 9; i++) {
        sudoku[i] = Array(9).fill(0);
    }
    solve(sudoku)
    console.log(sudoku)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (difficulty === 'Easy') {
                if (Math.random() > 0.7) sudoku[i][j] = 0
            } else if (difficulty === 'Medium') {
                if (Math.random() > 0.5) sudoku[i][j] = 0
            } else if (difficulty === 'Hard') {
                if (Math.random() > 0.3) sudoku[i][j] = 0
            } else return sudoku
        }
    }

    return sudoku
}


gridRandom = createPuzzle('Easy');
console.log(grid)