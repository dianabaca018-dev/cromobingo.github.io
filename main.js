document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('bingo-board');
    const overlay = document.getElementById('win-overlay');
    const ROWS = 4;
    const COLS = 3;
    const tilesArray = [];
    const winConditions = [];

    // Define Wins
    for (let r = 0; r < ROWS; r++) {
        winConditions.push([r * COLS, r * COLS + 1, r * COLS + 2]);
    }
    for (let c = 0; c < COLS; c++) {
        winConditions.push([c, c + COLS, c + COLS * 2, c + COLS * 3]);
    }

    // Build Board
    for (let i = 0; i < ROWS * COLS; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.backgroundImage = `url('tiles/tile${i + 1}.jpeg')`;
        
        tile.addEventListener('click', () => {
            tile.classList.toggle('marked');
            checkWin();
        });

        board.appendChild(tile);
        tilesArray.push(tile);
    }

    function checkWin() {
        const hasWon = winConditions.some(condition => {
            return condition.every(index => tilesArray[index].classList.contains('marked'));
        });

        if (hasWon) {
            setTimeout(() => {
                overlay.classList.add('visible');
            }, 250);
        }
    }
});