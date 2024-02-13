function calculateParallelogramArea(){
    // get base of parallelogram 
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText)
    console.log(base);

    // get height parallelogram 
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText)
    console.log(height);

    // Calculate Parallelogram Area 
    const area = base * height;
    console.log('Area of parallelogram is: ', area);

    // Display Parallelogram Area 
    const parallelogramAreaDisplay = document.getElementById('parallelogram-area');
    parallelogramAreaDisplay.innerText = area;
}