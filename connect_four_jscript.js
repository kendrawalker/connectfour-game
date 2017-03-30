// connect four

var currPlayer = 'red';
var col1 = document.getElementsByClassName('col1');
var col2 = document.getElementsByClassName('col2');
var col3 = document.getElementsByClassName('col3');
var col4 = document.getElementsByClassName('col4');
var col5 = document.getElementsByClassName('col5');
var col6 = document.getElementsByClassName('col6');
var col7 = document.getElementsByClassName('col7');
var columnArray = [col1, col2, col3, col4, col5, col6, col7];
var tokenSlot =document.getElementsByClassName("token-slot");
var tokenSlotarr = [].slice.call(tokenSlot);
var row1 = tokenSlotarr.slice(0,7);
var row2 = tokenSlotarr.slice(7,14);
var row3 = tokenSlotarr.slice(14,21);
var row4 = tokenSlotarr.slice(21,28);
var row5 = tokenSlotarr.slice(28,35);
var row6 = tokenSlotarr.slice(35,42);
var rowArray = [row1,row2,row3,row4,row5,row6];
var button = document.getElementById("button");
var player1 = "Player1";
var player2 = "Player2";

//gameboard plays listener
document.body.addEventListener('mousedown', function(e) {
    if(e.target.classList.contains('player1')) {
        alert("Slot already filled by player1");
    } else if(e.target.classList.contains('player2')) {
        alert("Slot already filled by player2");
    } else if(e.target.classList.contains('clickable')) {
        if(e.target.classList.contains('col1')) {
            addTokentoColumn(col1);
        } else
        if(e.target.classList.contains('col2')) {
            addTokentoColumn(col2);
        } else
        if(e.target.classList.contains('col3')) {
            addTokentoColumn(col3);
        } else
        if(e.target.classList.contains('col4')) {
            addTokentoColumn(col4);
        } else
        if(e.target.classList.contains('col5')) {
            addTokentoColumn(col5);
        } else
        if(e.target.classList.contains('col6')) {
            addTokentoColumn(col6);
        } else
        if(e.target.classList.contains('col7')) {
            addTokentoColumn(col7);
        }
    }

    checkHorizontalWinnerPlayer(player1);
    checkHorizontalWinnerPlayer(player2);
    checkVerticalWinnerPlayer(player1);
    checkVerticalWinnerPlayer(player2);
    checkDiagonalWinnerPlayer1();
    checkDiagonalWinnerPlayer2();

});

//function for adding players to columns
function addTokentoColumn(col) {
    for(var i=col.length-1; i>=0; i--) {
        if(!col[i].matches(".player1") && !col[i].matches(".player2")) {
            if(currPlayer=='red') {
                col[i].classList.add('player1');
                //--alternate players
                if(currPlayer == 'red') {
                    currPlayer = 'black';
                }
                else if (currPlayer == 'black') {
                    currPlayer = 'red';
                }
            }
            else if(currPlayer=='black') {
                col[i].classList.add('player2');
                //--alternate players
                if(currPlayer == 'red') {
                    currPlayer = 'black';
                }
                else if (currPlayer == 'black') {
                    currPlayer = 'red';
                }
            }
            break;
        }
    }
}

//functions for validaating winners
function checkHorizontalWinnerPlayer(player) {
    var stop;
    var playerCount;
    var playerClass;
    for(var k =0; k <rowArray.length; k++) {
        var rowToCheck =rowArray[k];
        playerCount = 0;
        for(var j=0; j<rowToCheck.length; j++) {
            var player1Class = rowToCheck[j].classList.contains('player1');
            var player2Class = rowToCheck[j].classList.contains('player2');
            if(player==player1) {
                playerClass= player1Class;
            } else if (player==player2) {
                playerClass= player2Class;
            }
            if(playerClass) {
                playerCount +=1;
                if(playerCount>=4) {
                    alert(player + " wins with " + playerCount + " in a row!");
                    rowToCheck[j].classList.add('winner');
                    rowToCheck[j-1].classList.add('winner');
                    rowToCheck[j-2].classList.add('winner');
                    rowToCheck[j-3].classList.add('winner');
                    stop = true;
                    break;
                }
            } else {
                playerCount = 0;
            }
        }
        if (stop) {
            break;
        }
    }
}

function checkVerticalWinnerPlayer(player) {
    var stop;
    var playerCount;
    var playerClass;
    for(var k =0; k <columnArray.length; k++) {
        var columnToCheck =columnArray[k];
        playerCount = 0;
        for(var j=0; j<columnToCheck.length; j++) {
            var player1Class = columnToCheck[j].classList.contains('player1');
            var player2Class = columnToCheck[j].classList.contains('player2');
            if(player==player1) {
                playerClass= player1Class;
            } else if (player==player2) {
                playerClass= player2Class;
            }
            if(playerClass) {
                playerCount +=1;
                if(playerCount>=4) {
                    alert(player + " wins with " + playerCount + " in a vertical row!");
                    columnToCheck[j].classList.add('winner');
                    columnToCheck[j-1].classList.add('winner');
                    columnToCheck[j-2].classList.add('winner');
                    columnToCheck[j-3].classList.add('winner');
                    stop = true;
                    break;
                }
            } else {
                playerCount = 0;
            }
        }
        if (stop) {
            break;
        }
    }
}

function checkDiagonalWinnerPlayer1() {
    for(var k= 3; k <tokenSlotarr.length; k++) {
        if(tokenSlotarr[k].classList.contains('player1')) {
            if(tokenSlotarr[k+6] && tokenSlotarr[k+6].classList.contains('player1')) {
                if(tokenSlotarr[k+12] && tokenSlotarr[k+12].classList.contains('player1')) {
                    if(tokenSlotarr[k+18] && tokenSlotarr[k+18].classList.contains('player1')) {
                        alert("Player1 Wins with 4 in a diagonal!");
                        tokenSlotarr[k].classList.add('winner');
                        tokenSlotarr[k+6].classList.add('winner');
                        tokenSlotarr[k+12].classList.add('winner');
                        tokenSlotarr[k+18].classList.add('winner');
                    }
                }
            }
        }
    }
    for(k=tokenSlotarr.length-1; k>0; k--) {
        if(tokenSlotarr[k].classList.contains('player1')) {
            if(tokenSlotarr[k-8] && tokenSlotarr[k-8].classList.contains('player1')) {
                if(tokenSlotarr[k-16] && tokenSlotarr[k-16].classList.contains('player1')) {
                    if(tokenSlotarr[k-24] && tokenSlotarr[k-24].classList.contains('player1')) {
                        alert("Player1 Wins with 4 in a diagonal!");
                        tokenSlotarr[k].classList.add('winner');
                        tokenSlotarr[k-8].classList.add('winner');
                        tokenSlotarr[k-16].classList.add('winner');
                        tokenSlotarr[k-24].classList.add('winner');
                    }
                }
            }
        }
    }
}

function checkDiagonalWinnerPlayer2() {
    for(var k= 3; k <tokenSlotarr.length; k++) {
        if(tokenSlotarr[k].classList.contains('player2')) {
            if(tokenSlotarr[k+6] && tokenSlotarr[k+6].classList.contains('player2')) {
                if(tokenSlotarr[k+12] && tokenSlotarr[k+12].classList.contains('player2')) {
                    if(tokenSlotarr[k+18] && tokenSlotarr[k+18].classList.contains('player2')) {
                        alert("Player2 Wins with 4 in a diagonal!");
                        tokenSlotarr[k].classList.add('winner');
                        tokenSlotarr[k+6].classList.add('winner');
                        tokenSlotarr[k+12].classList.add('winner');
                        tokenSlotarr[k+18].classList.add('winner');
                    }
                }
            }
        }
    }
    for(k=tokenSlotarr.length-1; k>0; k--) {
        if(tokenSlotarr[k].classList.contains('player2')) {
            if(tokenSlotarr[k-8] && tokenSlotarr[k-8].classList.contains('player2')) {
                if(tokenSlotarr[k-16] && tokenSlotarr[k-16].classList.contains('player2')) {
                    if(tokenSlotarr[k-24] && tokenSlotarr[k-24].classList.contains('player2')) {
                        alert("Player2 Wins with 4 in a diagonal!");
                        tokenSlotarr[k].classList.add('winner');
                        tokenSlotarr[k-8].classList.add('winner');
                        tokenSlotarr[k-16].classList.add('winner');
                        tokenSlotarr[k-24].classList.add('winner');
                    }
                }
            }
        }
    }
}

//reset the board process
button.addEventListener('mousedown', function() {
    for(var i=0; i<tokenSlot.length; i++) {
        tokenSlot[i].classList.remove('winner');
        tokenSlot[i].classList.remove('player1');
        tokenSlot[i].classList.remove('player2');
    }
});
