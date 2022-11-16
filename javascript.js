import { knightsTravails } from "./algo.js";
import {gameBoard} from "./gameboard.js";

const appController = (function (){
gameBoard();
knightsTravails([3,3], [4,3]);
})();
