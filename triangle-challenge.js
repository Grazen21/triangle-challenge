// smallest star component 
let star= "*";
// building of right angle triangle
let rightAngleTriangle= "";
// building of flipped right angle triangle
let flippedRightAngleTriangle= "";
// building of pyramid
let pyramid= "";
// smallest empty spaces component
let space= " ";

start = () => {

    let input = prompt("Key in a number for the number of layers in the triangle. Between 0-10");

    // for all triangles
    if (input >=0 && input <=10) {
        // function for right angle triangle
        for (i=0; i < input; i++){
            rightAngleTriangle += "\n" +star.repeat(i+1);
        };
        console.log("Right Angle Triangle"+rightAngleTriangle);

        // function for flipped right angle triangle
        for (i=0; i < input; i++){
            flippedRightAngleTriangle += "\n"+ space.repeat(input-i) +star.repeat(i+1);
        };
        console.log("Flipped Right Angle Triangle"+flippedRightAngleTriangle);

        // function for pyramid
        for (i=0; i < input; i++){
            pyramid += "\n" + space.repeat(input-i-1) +star.repeat(i*2+1)+ space.repeat(input-i-1);
        };
        console.log("Pyramid"+pyramid);
    }
    else {
        alert("Please enter an integer between 0-10.")
    }
}