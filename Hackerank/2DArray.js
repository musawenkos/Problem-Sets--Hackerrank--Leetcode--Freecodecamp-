'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    var row = 0;
    var col = 0;
    //Column Index
    var tl = col;
    var mt = col + 1;
    var tr = col + 2;
    var mc = col + 1;
    var bl = col;
    var mb = col + 1;
    var br = col + 2;
    

    var sumArr = [];

    for (let hrGlass = 1; hrGlass <= 16; hrGlass++) {
        if(tr == arr.length - 1 && br == arr.length - 1){
            row++;
            col = 0;
        }

        tl = col;
        mt = col + 1;
        tr = col + 2;
        mc = col + 1;
        bl = col;
        mb = col + 1;
        br = col + 2;

        var a = arr[row][tl];
        var b = arr[row][mt];
        var c = arr[row][tr];
        var d = arr[row+1][mc];
        var e = arr[row+2][bl];
        var f = arr[row+2][mb];
        var g = arr[row+2][br];

        var sum = a + b + c + d + e + f + g;
        sumArr.push(sum);
        col++;
    }
    return Math.max(...sumArr);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
