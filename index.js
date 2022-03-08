console.log("Hello world ");
document.getElementById("para").innerHTML ="Aman bhargava here";
document.getElementById("para").style.fontSize = "99px";
document.getElementById("para").style.background = "red";
document.write("This is document write ");
var number1 = 35;
var number2 = 45;
document.write(number1+number2);

var str=" aman bhargava ";
document.write(str);

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

document.write("<br>");
var x=34;
var u=63;
document.write("first value is ",x," and second value is ",u," addition is ",x+u);

/* functions */
function avg(a,b) {
    return (a+b);
}

document.write("<br>",avg(" bhargava "," aman "));

if (x==34) {
    document.write("<br>Aman is here");
}
else
{
    document.write("<br>bhargava is here");
}

/* example function */
function age(a)
{
    if (a<18) {
        document.write("<br>Age is less than 18 ");
        if(a<16)
        {
            document.write("<br>You can't apply for tempory driving lisence.");
        }
        else
        {
            document.write("<br>You can aaply for tempory driving lisence");
        }
    }
    else
    {
        document.write("<br>You can aaply for perment driving lisence");
    }
}

age(5);
age(15);
age(16);
age(18);
age(28);

var array=[1,4,5,2,7,5,3];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    document.write("<br>",array[i]);
}

document.write("<hr>");
var num1 =43;
var str="aman";
var arr=[1,5,4,"bhargava"];
var ob={
    f_name:"aman",
    l_name:"bhargava",
    age: 18,
    sec:'A',
    branch:"Cse"
};

document.write("<br>",num1);
document.write("<br>",str);
document.write("<br>",arr);

for (let i = 0; i < arr.length; i++) 
{
    document.write("<br>",arr[i])
}

var i=0;
arr.forEach(element => {
    document.write("<br>",element);
});

document.write("<br> Student name is ",ob.f_name+ob.l_name," student age is ",ob.age," and section is ",ob.sec,"-",ob.branch);

let i=0;
while (i<6) {
    console.log(i);
    i++;
}


