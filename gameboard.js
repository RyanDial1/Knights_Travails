const gameBoard = () => {
    //instantiate variables
    const defaultStartLocation = [0,0];
    const coordArray = []; ///record coords of each cell
    const chessTable = document.createElement("table");

    //create board cells and apply position
    chessTable.setAttribute("class", "center");
    for(let i = 0; i < 8; i++){
        const tableRow = document.createElement("tr");
        let cellRowCoord = Math.abs(i - 7);
        tableRow.textContent = cellRowCoord;
        for(let z = 0; z < 8;z++){
            const tableCell = document.createElement("td");
            let cellColumnCoord = z;
            tableCell.textContent = cellColumnCoord;
            //shade cells that are odd value
            if((i+z)%2 == 0){
                tableCell.setAttribute("class", "cell whitecell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0,2);
            } else{
                tableCell.setAttribute("class", "cell blackcell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0,2);
            }
        }
        chessTable.appendChild(tableRow);
    }
    //Create Knight at 0,0
    const cellNodes = chessTable.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {
        if (defaultStartLocation.toString() === cellNode.dataset.coordArray){
            let knightImg = document.createElement("img");
            knightImg.src = "./assets/chess-knight-svgrepo-com.svg";
            cellNode.appendChild(knightImg);

        }
    });

    document.body.append(chessTable);
        
};






export {gameBoard};