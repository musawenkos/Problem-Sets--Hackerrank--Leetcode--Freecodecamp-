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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    var c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
    var indexArrLvl = [];
    var diffArrLvl = [];
    var lastLvl = [];
    c.map((val,index,arr) =>{
        if(val == 0){
            indexArrLvl.push(index);
        }  
    });
    console.log(indexArrLvl);
    
    indexArrLvl.map((val,index,arr) =>{
        var diff = arr[index + 1] - val;
        index + 1 != arr.length ? diffArrLvl.push(diff) : 0;
    });
    console.log(diffArrLvl);
    
    diffArrLvl.map((val, index,arr)=>{
        if(arr.length != arr[index+1]){
            if(val == 1 && arr[index+1] == 1){
                lastLvl.push(val + arr[index+1]);
                diffArrLvl.splice(arr[index+1],1);
            }else{
                lastLvl.push(val);
            }
        }
    });

    console.log(lastLvl);



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}
