function calculateTriangleArea(){
    // get triangle base value 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    

    // get triangle height 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // Calculate Triangle Area 
    const areaOfTriangle = 0.5 * base * height;
    console.log('are of triangle is', areaOfTriangle);

    // display triangle area 
    const triangleAreaDisplay = document.getElementById('triangle-area');
    triangleAreaDisplay.innerText = areaOfTriangle;
}