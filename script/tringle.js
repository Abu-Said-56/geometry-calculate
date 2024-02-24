// Calculate Traingle Area

function tringleArea(){
    // traingle base
    const TraingleBase = document.getElementById('traingle_base');
    const traingleBaseText = TraingleBase.value;
    const base = parseFloat(traingleBaseText);
    //console.log(base);

    // traingle height
    const traingleHeight = document.getElementById('traingle_height');
    const traingleHeightText = traingleHeight.value;
    const height = parseFloat(traingleHeightText);
   // console.log(height);

    // traingle area
    const area = 0.5 * base * height;
    // console.log('area of traingle is',area);

    // display traingle area
    const traingleArea = document.getElementById('traingle_area');
    traingleArea.innerText = area;

}