var coloursList = generateRandomColours(6);
//the pickedColor is the colour we want to choose correctly
var pickedColour = randomColPicker();
var squares = document.querySelectorAll('.square');
var messageDisplay = document.getElementById('message'); //displays 'correct' or 'try again' to the user
var resetButton = document.getElementById('reset');
var h1 = document.querySelector('h1');
  

assignColors();

for (let i = 0; i<coloursList.length; i++){
     
    
    //---------Click Square Events Logic-------//
      /*When we click on one of the squares we want to: 
      get the square we clicked on
      compare its colour to pickedColour
      if they are different we grey out the square, and provide handling
      if they are the same the player has won and we provide some handling
      */
    squares[i].addEventListener('click',()=>{
        //grab the colour of the square that was clicked
        var clickedColour  = squares[i].style.backgroundColor; 
        if (clickedColour === pickedColour){
            messageDisplay.textContent = 'Correct!';
            changeColours(pickedColour);
            resetButton.textContent = 'Play Again?'
        }else{
            squares[i].style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again!';
        }
    });
}



//Reset Button Handling
    resetButton.addEventListener('click', ()=>{
        resetGame();    
    });

//-----------------Functions-------------------------------------//

function resetGame(){
        coloursList = generateRandomColours(6);
        pickedColour = randomColPicker();
        assignColors();
        messageDisplay.textContent = '';
        h1.style.background = '#232323';
        resetButton.textContent = 'New Colours'

}

function assignColors(){
for (let i = 0; i<coloursList.length; i++){
      //randomly assign colour options
    squares[i].style.backgroundColor = coloursList[i];
}
}
    
//The changeColours function changes all the squares to the correct colour when it is clicked by the user, and updates the h1
function changeColours(colour){
    for (let i = 0; i<squares.length; i++){
        squares[i].style.background = colour; 
    }
  var h1 =  document.querySelector("h1");
       h1.style.backgroundColor = colour;
  
}

//The randomColPicker function will choose a random element of the coloursList array to be the picked / target colour 
function randomColPicker(){//choose between 1 and the array length (3 or 6, for now)
    var el = Math.floor(Math.random()*coloursList.length);
    //show our pickedColour in the header
    document.getElementById('pickedCol').textContent = coloursList[el].toUpperCase();
    return coloursList[el];
}
  

//this function makes our array of colours

function generateRandomColours(noOfColours){
    //make array
    //add noOfColours to array
    //return array
    var result = [];
    for (let i = 0;i<noOfColours; i++){
        result.push(randomColour());
    }
    return result; 
}

function randomColour(){//this function makes a singular random colour
    //choose a red from 0-255, green, blue
    
    var red = Math.floor(Math.random()*256); 
    var green = Math.floor(Math.random()*256); 
    var blue = Math.floor(Math.random()*256); 
    
    return `rgb(${red}, ${green}, ${blue})`;
}



