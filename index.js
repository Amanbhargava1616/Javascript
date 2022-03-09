let arr=[1,4,3,5,6];
document.write("<br>",arr);
arr.pop();
document.write("<br>",arr);
arr.push("aman");
document.write("<br>",arr);
arr.shift();
document.write("<br>",arr);
arr.unshift("bhargava");
document.write("<br>",arr);

document.write("<br>",arr.toString());

document.write("<br>",arr.sort());

document.write("<br>",arr.length);


let str="Aman bhargava";

document.write("<br>",str.length);

document.write("<br>",str.indexOf("n"));

document.write("<br>",str.lastIndexOf("a"));

document.write("<br>",str.slice(0,3));

document.write("<br>",str.replace("Aman" , "Dumpty"));

document.write("<br>",str);

let mydate =new Date();
document.write("<br>",mydate);

document.getElementById("para").style.background = "lightgrey ";

document.getElementById("para").style.height="100px";
document.getElementById("para").style.width="100px";

let elem=document.getElementById('button');
console.log(elem);

let elem2 =document.getElementById('para');
console.log(elem2)