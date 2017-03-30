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
console.log(tokenSlotarr);
var row1 = tokenSlotarr.slice(0,7);
var row2 = tokenSlotarr.slice(7,14);
var row3 = tokenSlotarr.slice(14,21);
var row4 = tokenSlotarr.slice(21,28);
var row5 = tokenSlotarr.slice(28,35);
var row6 = tokenSlotarr.slice(35,42);
var rowArray = [row1,row2,row3,row4,row5,row6];


document.body.addEventListener('mousedown', function(e) {
    if(e.target.classList.contains('player1')) {
        alert("Slot already filled by player1");
    } else if(e.target.classList.contains('player2')) {
        alert("Slot already filled by player2");
    } else if(e.target.classList.contains('clickable')) {

        //col1 situation
        if(e.target.classList.contains('col1')) {
            for(var i=col1.length-1; i>=0; i--) {
                if(!col1[i].matches(".player1") && !col1[i].matches(".player2")) {
                    console.log(col1[i].classList);
                    if(currPlayer=='red') {
                        col1[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col1[i].classList.add('player2');
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
        } else

        //col2 situation
        if(e.target.classList.contains('col2')) {
            for(i=col2.length-1; i>=0; i--) {
                if(!col2[i].matches(".player1") && !col2[i].matches(".player2")) {
                    console.log(col2[i].classList);
                    if(currPlayer=='red') {
                        col2[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col2[i].classList.add('player2');
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
        } else

        //col3 situation
        if(e.target.classList.contains('col3')) {
            for(i=col3.length-1; i>=0; i-- ) {
                if(!col3[i].matches(".player1") && !col3[i].matches(".player2")) {
                    console.log(col3[i].classList);
                    if(currPlayer=='red') {
                        col3[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col3[i].classList.add('player2');
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
        } else

        //col4 situation
        if(e.target.classList.contains('col4')) {
            for(i=col4.length-1; i>=0; i--) {
                if(!col4[i].matches(".player1") && !col4[i].matches(".player2")) {
                    console.log(col4[i].classList);
                    if(currPlayer=='red') {
                        col4[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col4[i].classList.add('player2');
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
        } else

        //col5 situation
        if(e.target.classList.contains('col5')) {
            for(i=col5.length-1; i>=0; i--) {
                if(!col5[i].matches(".player1") && !col5[i].matches(".player2")) {
                    console.log(col5[i].classList);
                    if(currPlayer=='red') {
                        col5[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col5[i].classList.add('player2');
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
        } else

        //col6 situation
        if(e.target.classList.contains('col6')) {
            for(i=col6.length-1; i>=0; i--) {
                if(!col6[i].matches(".player1") && !col6[i].matches(".player2")) {
                    console.log(col6[i].classList);
                    if(currPlayer=='red') {
                        col6[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col6[i].classList.add('player2');
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
        } else

        //col7 situation
        if(e.target.classList.contains('col7')) {
            for(i=col7.length-1; i>=0; i--) {
                if(!col7[i].matches(".player1") && !col7[i].matches(".player2")) {
                    console.log(col7[i].classList);
                    if(currPlayer=='red') {
                        col7[i].classList.add('player1');
                        //--alternate players
                        if(currPlayer == 'red') {
                            currPlayer = 'black';
                        }
                        else if (currPlayer == 'black') {
                            currPlayer = 'red';
                        }
                    }
                    else if(currPlayer=='black') {
                        col7[i].classList.add('player2');
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
    }

    checkHorizontalWinnerPlayer1();
    checkHorizontalWinnerPlayer2();
    checkVerticalWinnerPlayer1();
    checkVerticalWinnerPlayer2();
    checkDiagonalWinnerPlayer1();
    checkDiagonalWinnerPlayer2();

});


//this is only checking for player 1 winner right now. needs to be updated to include player2
function checkHorizontalWinnerPlayer1() {
    var stop;
    var player1Count;
    for(var k =0; k <rowArray.length; k++) {
        var rowToCheck =rowArray[k];
        player1Count = 0;
        for(var j=0; j<rowToCheck.length; j++) {
            if(rowToCheck[j].classList.contains('player1')) {
                player1Count +=1;
                if(player1Count>=4) {
                    alert("Player1 Wins with " + player1Count + " in a row!");
                    rowToCheck[j].classList.add('winner');
                    rowToCheck[j-1].classList.add('winner');
                    rowToCheck[j-2].classList.add('winner');
                    rowToCheck[j-3].classList.add('winner');
                    stop = true;
                    break;
                }
            } else {
                player1Count = 0;
            }
        }
        if (stop) {
            break;
        }
    }
}

function checkHorizontalWinnerPlayer2() {
    var stop;
    var player2Count;
    for(var h = 0; h < rowArray.length; h++) {
        var rowToCheck =rowArray[h];
        player2Count = 0;
        for(var j = 0; j < rowToCheck.length; j++) {
            if(rowToCheck[j].classList.contains('player2')) {
                player2Count +=1;
                if(player2Count>=4) {
                    alert("Player2 Wins with " + player2Count + " in a row!");
                    rowToCheck[j].classList.add('winner');
                    rowToCheck[j-1].classList.add('winner');
                    rowToCheck[j-2].classList.add('winner');
                    rowToCheck[j-3].classList.add('winner');
                    stop = true;
                    break;
                }
            } else {
                player2Count = 0;
            }
        }
        if (stop) {
            break;
        }
    }
}

function checkVerticalWinnerPlayer1() {
    var stop;
    var player1Count;
    for(var k =0; k <columnArray.length; k++) {
        var columnToCheck =columnArray[k];
        player1Count = 0;
        for(var j=0; j<columnToCheck.length; j++) {
            if(columnToCheck[j].classList.contains('player1')) {
                player1Count +=1;
                if(player1Count>=4) {
                    alert("Player1 Wins with " + player1Count + " in a vertical row!");
                    columnToCheck[j].classList.add('winner');
                    columnToCheck[j-1].classList.add('winner');
                    columnToCheck[j-2].classList.add('winner');
                    columnToCheck[j-3].classList.add('winner');
                    stop = true;
                    break;
                }
            } else {
                player1Count = 0;
            }
        }
        if (stop) {
            break;
        }
    }
}

function checkVerticalWinnerPlayer2() {
    var stop;
    var player2Count;
    for(var k =0; k <columnArray.length; k++) {
        var columnToCheck =columnArray[k];
        player2Count = 0;
        for(var j=0; j<columnToCheck.length; j++) {
            if(columnToCheck[j].classList.contains('player2')) {
                player2Count +=1;
                if(player2Count>=4) {
                    alert("Player2 Wins with " + player2Count + " in a vertical row!");
                    columnToCheck[j].classList.add('winner');
                    columnToCheck[j-1].classList.add('winner');
                    columnToCheck[j-2].classList.add('winner');
                    columnToCheck[j-3].classList.add('winner');
                    stop = true;
                    break;
                }
            } else {
                player2Count = 0;
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
