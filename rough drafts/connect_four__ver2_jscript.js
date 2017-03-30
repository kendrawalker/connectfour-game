// connect four


//var clickable = document.getElementsByClassName('clickable');

//var whichPlayer = function()
var currPlayer = 'red';
var col1 = document.getElementsByClassName('col1');
var col2 = document.getElementsByClassName('col2');
var col3 = document.getElementsByClassName('col3');
var col4 = document.getElementsByClassName('col4');
var col5 = document.getElementsByClassName('col5');
var col6 = document.getElementsByClassName('col6');
var col7 = document.getElementsByClassName('col7');

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
            for(var i=col2.length-1; i>=0; i--) {
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
            for(var i=col3.length-1; i>=0; i-- ) {
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
            for(var i=col4.length-1; i>=0; i--) {
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
            for(var i=col5.length-1; i>=0; i--) {
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
            for(var i=col6.length-1; i>=0; i--) {
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
            for(var i=col7.length-1; i>=0; i--) {
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
});

// function checkVerticalWinner() {
//
// }
//


var tokenSlot =document.getElementsByClassName("token-slot");
var tokenSlotarr = [].slice.call(tokenSlot);
var row1 = tokenSlotarr.slice(0,7);
var row2 = tokenSlotarr.slice(7,14);
var row3 = tokenSlotarr.slice(14,21);
var row4 = tokenSlotarr.slice(21,28);
var row5 = tokenSlotarr.slice(28,35);
var row6 = tokenSlotarr.slice(35,42);
var rowArray = [row1,row2,row3,row4,row5,row6];
console.log(rowArray);
var player1Count = 0;
var player2Count = 0;

function checkHorizontalWinner() {
//check row1 player1
    for(var j=0;j<row1.length;j++) {
        if(row1[j].classList.contains('player1')) {
            player1Count +=1;
            if(player1Count>=4) {
                alert("Player1 Wins with " + player1Count + " in a row!");
            }
        } else if(row1[j].classList.contains('player2')) {
            player1Count =0;
        }
    }
}

checkHorizontalWinner();
