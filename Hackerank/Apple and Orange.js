var s = 7;
var t = 11;
var a = 5;
var b = 15;
var apples = [-2,2,1];
var orange = [5,-6];

var aRes = apples.map((num)=>{
    return a + num;
});
var oRes = orange.map((num)=>{
    return b + num;
});
var aResLen = aRes.filter((num)=>{
    return num >= s && num <= t;
});

var oResLen = oRes.filter((num)=>{
    return num >= s && num <= t;
});
 
console.log(aResLen.length);
console.log(oResLen.length);

/*

    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree.
    oranges: integer array, distances at which each orange falls from the tree.


s 7 t 11
a 5 b 15
m-length 3 n-length 2
m -2 2 1
n 5 -6 */
