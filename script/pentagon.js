// pentagon area
function pentagonArea(){
    // first element
    const pentagonP = document.getElementById('pentagon_p');
    const pentagonPText = pentagonP.value;
    const p =parseFloat(pentagonPText);

    // second element 
    const pentagonD = document.getElementById('pentagon_d');
    const pentagonDText = pentagonD.value;
    const d =parseFloat(pentagonDText);

    // area calculate
    const area = 0.5 * p * d;

    // display area
    const pentagonDisplay = document.getElementById('pentagon_area');
    pentagonDisplay.innerText = area;
}

// function pentagonArea(){
//     const pentagonP = getInputValueById('pentagon_p');
//     const pentagonD = getInputValueById('pentagon_d');
//     const area = 0.5 * pentagonP * pentagonD;
//     setInnerTextById('pentagon_area',area);
// }

