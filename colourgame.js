const coloursList =[ "rgb(255, 0, 0)",
                    "rgb(255, 255, 0)",
                    "rgb(0, 255, 0)",
                    "rgb(0, 255, 255)",
                    "rgb(0, 0, 255)",
                    "rgb(255, 0, 255)"];
//the pickedColor is the colour we want to choose correctly
var pickedColour = randomColPicker();
var squares = document.querySelectorAll('.square');
var messageDisplay = document.getElementById('message'); //displays 'correct' or 'try again' to the user

  //show our pickedColour in the header
document.getElementById('pickedCol').textContent = pickedColour.toUpperCase();


coloursList.forEach((col, index)=>{
        //randomly assign colour options
    squares[index].style.backgroundColor = col;
    
//---------Click Events Logic-------//
      /*When we click on one of the squares we want to: 
      get the square we clicked on
      compare its colour to pickedColour
      if they are different we grey out the square, and provide handling
      if they are the same the player has won and we provide some handling
      */
    squares[index].addEventListener('click',()=>{
        //grab the colour of the square that was clicked
        var clickedColour  = squares[index].style.backgroundColor; //in a normal for loop (this.style would work)
        if (clickedColour === pickedColour){
            messageDisplay.textContent = 'Correct!';
            changeColours(pickedColour);
        }else{
            squares[index].style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again!';
        }
    });
    });
    
//The changeColours function changes all the squares to the correct colour when it is clicked by the user
function changeColours(colour){
    for (let i = 0; i<squares.length; i++){
        squares[i].style.background = colour; 
    }
}

//The randomColPicker function will choose a random element of the coloursList array to be the picked / target colour 
function randomColPicker(){//choose between 1 and the array length (3 or 6, for now)
    var el = Math.floor(Math.random()*coloursList.length);
    return coloursList[el];
}
  




