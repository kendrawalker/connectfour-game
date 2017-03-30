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
    //--check if slot taken by another player
    if(e.target.classList.contains('player1')) {
        alert("Slot already filled by player1");
    } else if(e.target.classList.contains('player2')) {
        alert("Slot already filled by player2");
    //--perform function with available clickable slots
    } else if(e.target.classList.contains('clickable')) {
        //console.log('clicked ' + e.target.className);

        //--look for the available slots in column
        //col3 situation
        if(e.target.classList.contains('col3')) {
            //--loop backwards to get the lowest slot available
            for(var i=col3.length-1; i>=0; i-- ) {
                //console.log(col3[i]);
                //console.log(col3[i].classList);
                //if(col3[i].classList.contains('player1')== false) {
                if(!col3[i].matches(".player1") && !col3[i].matches(".player2")) {
                    console.log(col3[i].classList);
                    //--once you've identified the slot to fill, add appropriate player class
                    if(currPlayer=='red') {
                        col3[i].classList.add('player1');
                    }
                    else if(currPlayer=='black') {
                        col3[i].classList.add('player2');
                    }
                    break; //stopping after getting the lowest spot
                }
                //--selects all divs that dont have player1 class
                //console.log(document.querySelector("div:not(.player1)"));
            }
        } else

        //col1 situation
        if(e.target.classList.contains('col1')) {
            for(var i=col1.length-1; i>=0; i--) {
                if(!col1[i].matches(".player1") && !col1[i].matches(".player2")) {
                    console.log(col1[i].classList);
                    if(currPlayer=='red') {
                        col1[i].classList.add('player1');
                    }
                    else if(currPlayer=='black') {
                        col1[i].classList.add('player2');
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
                    }
                    else if(currPlayer=='black') {
                        col2[i].classList.add('player2');
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
                    }
                    else if(currPlayer=='black') {
                        col4[i].classList.add('player2');
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
                    }
                    else if(currPlayer=='black') {
                        col5[i].classList.add('player2');
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
                    }
                    else if(currPlayer=='black') {
                        col6[i].classList.add('player2');
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
                    }
                    else if(currPlayer=='black') {
                        col7[i].classList.add('player2');
                    }
                    break;
                }
            }
        }

    }
    //--alternate players
    if(currPlayer == 'red') {
        currPlayer = 'black';
    }
    else if (currPlayer == 'black') {
        currPlayer = 'red';
    }

});
