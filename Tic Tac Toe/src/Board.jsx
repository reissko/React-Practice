
function Board() {
    
    let player = "X";
    const handleClick = (e) => {
        const square = e.target;
        square.innerHTML = player;
        square.disabled = true;
        player = player === "X" ? "O" : "X";

        checkWin();
    }

    function checkWin() {
        // check for 3 in a row
        const cells = Array.from(document.querySelectorAll('.board-grid button'));
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]            // diagonals
        ];
        
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML) {
                alert(`Player ${cells[a].innerHTML} wins!`);
                cells[a].style.backgroundColor = "green";
                cells[b].style.backgroundColor = "green";
                cells[c].style.backgroundColor = "green";
                return;
            }
        }
        
    }

    return (
        <> 
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <div className="board-grid">
                    {/* row 1*/}
                    <button className="00" onClick={handleClick}></button>
                    <button className="01" onClick={handleClick}></button>
                    <button className="02" onClick={handleClick}></button>
                    {/* row 2*/}
                    <button className="10" onClick={handleClick}></button>
                    <button className="11" onClick={handleClick}></button>
                    <button className="12" onClick={handleClick}></button>
                    {/* row 3*/}
                    <button className="20" onClick={handleClick}></button>
                    <button className="21" onClick={handleClick}></button>
                    <button className="22" onClick={handleClick}></button>
                </div>
            </div>
        </>
    );

}

export default Board