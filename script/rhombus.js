// Rhombus area calculate

function rhombusArea(){
    // input d1
    const rhombusD1 = document.getElementById('rhombus_d1');
    const rhombusText = rhombusD1.value;
    const d1 = parseFloat(rhombusText);
    console.log(d1);

    // input d2
    const rhombusInp = document.getElementById('rhombus_d2');
    const rhombusInpText = rhombusInp.value;
    const d2 = parseFloat(rhombusInpText);
    console.log(d2);

    // calculate area
    const area = 0.5 * d1 * d2;

    // display result
    const rhombusAreaResult = document.getElementById('rhombus_area');
    rhombusAreaResult.innerText = area;
    console.log(area);

}