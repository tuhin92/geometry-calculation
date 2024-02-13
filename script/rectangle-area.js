function calculateRectangleArea(){
    // get width of the rectangle 
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
     

    // get length of the rectangle 
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)

    // Calculate Rectangle Area 
    const area = width * length;
    console.log('Area of rectangle is: ', area);

    const rectangleAreaDisplay = document.getElementById('rectangle-area');
    rectangleAreaDisplay.innerText = area;
}