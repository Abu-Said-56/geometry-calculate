// pentagon area
function ellipseArea(){
    // first element
    const ellipseP = document.getElementById('ellipse_p');
    const ellipsePText = ellipseP.value;
    const a =parseFloat(ellipsePText);

    // second element 
    const ellipseD = document.getElementById('ellipse_d');
    const ellipseDText = ellipseD.value;
    const b =parseFloat(ellipseDText);

    // area calculate
    const area = 3.1416 * a * b;

    // display area
    const ellipseDisplay = document.getElementById('ellipse_area');
    ellipseDisplay.innerText = area;
}