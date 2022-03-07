console.log("Hello world ");
document.getElementById("para").innerHTML ="Aman bhargava here";
document.getElementById("para").style.fontSize = "99px";
document.getElementById("para").style.background = "red";
document.write("This is document write ");
var number1 = 35;
var number2 = 45;
document.write(number1+number2);

var name=" aman bhargava ";
document.write(name);

var marks ={    //objects
    ravi:35,
    aman : 56,
    harry :453.65
};

document.write(marks.aman," added to ",marks.ravi," = ",marks.aman+marks.ravi);
console.log(marks);

document.write("<br>");   // break a line

var arr=[1,2,3," aman bhargava "];     //array

document.write(arr[0]);
document.write(arr[1]);
document.write(arr[2]);
document.write(arr[3]);
console.log(arr);


document.write(number1+=1);

document.write("<br>");
var radius = 40;
const pi =3.14;
document.write(radius*radius*pi);
