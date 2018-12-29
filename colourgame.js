const coloursList =[ "rgb(255, 0, 0)",
                    "rgb(255, 255, 0)",
                    "rgb(0, 255, 0)",
                    "rgb(0, 255, 255)",
                    "rgb(0, 0, 255)",
                    "rgb(255, 0, 255)"];
//the pickedColor is the colour we want to choose correctly
var pickedColour = coloursList[3];
function assignColours(){
    //randomly assign colour options
    coloursList.forEach((col, iterator)=>{
       document.querySelectorAll('.square')[iterator].style.backgroundColor = col;
    
    });
    
    //show our pickedColour in the header
    document.getElementById('pickedCol').textContent = pickedColour.toUpperCase();

}
assignColours();

//---Click Events Logic----//
/*When we click on one of the squares we want to: 
    get the square we clicked on
    compare its colour to pickedColour
    if they are different we grey out the square, and provide handling
    if they are the same the player has won and we provide some handling
    */

