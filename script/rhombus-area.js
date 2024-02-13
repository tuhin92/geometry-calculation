function calculateRhombusArea(){
    // get Rhombus diagonal-1 
    const rhombushDiagonal_1Input = document.getElementById('rhombus-diagonal-1');
    const rhombushDiagonal_1Text = rhombushDiagonal_1Input.value;
    const diagonal_1 = parseFloat(rhombushDiagonal_1Text)
    console.log(diagonal_1);

    // get Rhombus diagonal-2 
    const rhombushDiagonal_2Input = document.getElementById('rhombus-diagonal-2');
    const rhombushDiagonal_2Text = rhombushDiagonal_2Input.value;
    const diagonal_2 = parseFloat(rhombushDiagonal_2Text)
    console.log(diagonal_2);

    // calculate rhombus area 
    const area = 0.5 * diagonal_1 * diagonal_2;
    console.log(area);

    // display rhombus area 
    const rhombusAreaDisplay = document.getElementById('rhombus-area');
    rhombusAreaDisplay.innerText = area;
}