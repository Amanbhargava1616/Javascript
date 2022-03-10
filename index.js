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

let button=document.getElementById('button');
button.innerHTML = "hi there let me call you mine";
button.style.background ="black";
button.style.color ="white";
button.style.borderRadius ="10px";

document.write("<br>",button.innerText);
document.write("<br>",button.innerHTML);

let new_ele=document.createElement('div');
new_ele.innerHTML="new div";
new_ele.style.background="darkgrey"
new_ele.style.color="white"

para=document.getElementById('para');
para.appendChild(new_ele);

new_span=document.createElement('span');
new_span.innerHTML="<br>This is span";
para.replaceChild(new_span,new_ele);


function clicked() {
    para.innerHTML="Button 1 was clicked";               // <element onclick=" clicked() ">...</element>
}

button.onclick=function()
{
    para.innerHTML="Button was clicked";
}

para.addEventListener('mouseover',function()
{
    console.log("loged");
});

logkaro=()=>
{
    console.log("loged kro");
}


ob={
    f_name: "Aman",
    l_name: "Bhargava",
    age: 34,
    sec: 'A'
};

let jso=JSON.stringify(ob);
console.log(jso);

let parso=JSON.parse('{"f_name":"Aman","l_name":"Bhargava","age":34,"sec":"A"}');
console.log(parso);


setInterval(function () {
    let newdate=new Date();
    document.getElementById('clock').innerHTML="<br>"+newdate.toLocaleTimeString()+" on date "+newdate.toDateString();
},1000);






