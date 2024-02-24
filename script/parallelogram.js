// Parallelogram area
function parallelogramArea(){
    //Parallelogram base
    const ParallelogramBase = document.getElementById('Parallelogram_base');
    const ParallelogramBaseText = ParallelogramBase.value;
    const base = parseFloat(ParallelogramBaseText);
    console.log(base);

    // Parallelogram height
    const ParallelogramHeight = document.getElementById('Parallelogram_height');
    const ParallelogramHeightText = ParallelogramHeight.value;
    const height = parseFloat(ParallelogramHeightText);
    console.log(height);

    // calculate Parallelogram area
    const area = base * height;

    // display area
    const parallelogramArea = document.getElementById('Parallelogram_area');
    parallelogramArea.innerText = area;
    console.log(area);
}