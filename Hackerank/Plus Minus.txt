var arr = [-4,3,-9,0,4,1];

arr.sort();
//[-1,-1,0,1,1]
var arrP = [];
var arrZ = [];
var arrN = [];
for(var i = 0; i < arr.length; i++){
  if(arr[i] < 0){
    arrN.push(arr[i]);
  }
  if(arr[i] === 0){
    arrZ.push(arr[i])
  }
  if(arr[i] > 0){
    arrP.push(arr[i])
  }
}

var pF = arrP.length / arr.length;
var zF = arrZ.length / arr.length;
var nF = arrN.length / arr.length; 

console.log(pF.toFixed(6))
console.log(nF.toFixed(6))
console.log(zF.toFixed(6))