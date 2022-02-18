var hikeSteps = 'UDDDUDUU';
var lvl = 0; 
var v = 0;
for(var i = 0; i < hikeSteps.length; i++){
    var hStepLetter = hikeSteps.charAt(i);
    if(hStepLetter == 'D') lvl++;
    if(hStepLetter == 'U') lvl--;

    if(hStepLetter == 'U' && lvl == 0) v++;
}

console.log(v);