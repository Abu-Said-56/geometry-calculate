// rectraingle area calculate
function rectraingleArea(){
    //console.log('reactraingle');
    const rectraingleWidth = document.getElementById('rectraingle_width');
    const rectraingleWidthInp = rectraingleWidth.value;
    const width = parseFloat(rectraingleWidthInp);
    //console.log(width)

    // rectraingle_I
    const rectraingleHeight = document.getElementById('rectraingle_I');
    const rectraingleHeightInp = rectraingleHeight.value;
    const height = parseFloat(rectraingleHeightInp);
    //console.log(height);

    // rectraingle area
    const area = width * height;

    // display rectraingle area
    const RectraingleArea = document.getElementById('rectraingle_area');
    RectraingleArea.innerText = area;
}