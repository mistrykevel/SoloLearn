    /* JS can be placed in the <body> or <head> tag using the <script> tag 

function printTime() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  var day = d.getDay();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var msecs = d.getMilliseconds();
  document.body.innerHTML = year+":"+month+":"+date+":"+day+":"+hours+":"+mins+":"+secs+":"+msecs;
}
setInterval(printTime, 1000);

CLOCK
*/

window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};

var r = prompt("Password");
while(r != "mynotes"){
    var r = prompt("Password"); 
}
if(r == "mynotes"){
    alert("YOU GOT THE PASSWORD!!!!!");
}

alert("NOTES");

var x =100;
document.write(x + "<br/>");

document.write((4 > 2) && (10 < 15) + "<br/>");

var Chuck =43;
var isBeary = (Chuck > 3) ? "Beary": "Chuck";
document.write(isBeary + "<br/>")

var string ="I like";
var stringg = "to eat food";
document.write(string + stringg + "<br/>");

var bear =3;
var chuc =43;
if(bear<chuc){
    alert("BEEEEER");
}

var bear =333;
var chuc =43;
if(bear<chuc){
    alert("BEEEEER");
}
else{
    alert("DADDIEEEEEE");
}

var a =1;
var b =2;
var c =3;
if(a > b){
    document.write("oof" + "<br/>");
}
else if(b > c){
    document.write("foo" + "<br/>");
}
else{
    document.write("foooof" + "<br/>");
}

var day = 2;
switch (day) {
  case 1:
    document.write("Monday" + "<br/>");
    break;
  case 2:
    document.write("Tuesday" + "<br/>");
    break;
  case 3:
    document.write("Wednesday" + "<br/>");
    break;
  default:
    document.write("Another day" + "<br/>");
}

for (i=1; i<=5; i++) {
   document.write(i + "<br />");
}

document.write("." + "<br/>");

while(a<=10){
    document.write(a + "<br/>");
    a++;
}

document.write("." + "<br/>");

do{
    document.write(b + "<br/>");
    b++;
}
while(b<=7);

function oof() {
    document.write("Function" + "<br/>");
}

oof();

function sayhi(name){
    document.write("Hi, " + name + "<br/>");
}

sayhi("Human");

function sayAge(name,age){
    document.write(name + " is " + age + " years old" + "<br/>");
}

sayAge("Kevel",14);

function retur(y,z){
    return y/z;
}
var t = retur(8,3);
document.write(t);

alert("hi,\n i'm \n a \n human \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

var ood = prompt("HI WHATS YOUR NAME??????");
alert(ood);

var result = confirm("IS THIS WHAT YOU REALLY WANT TO DO? LEAVE?!");
if(result === true){
    alert("I'M SAD NOW. WHY DID YOU HAVE TO LEAVE :(");
}
else{
    alert("YAY YOU'RE STAYING!!!!!!!!!!!!!!!!!");
}
var perso = {
   name: "Human", age: 38,
   favColour: "Brown", height: 160
};

var q = perso.age;

document.write(q + "<br/>");

function personn(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var p1= new personn("Hooman", 50, "Sea green");
var p2= new personn("Humman", 12, "Xanadu");

document.write(p1.name + "<br/>");
document.write(p2.favColor + "<br/>");

function person(name, age) {
  this.name = name;  
  this.age = age;
  this.BornYear = birthyear
  this.changeName = function (name) {
    this.name = name;
  }
}

var p = new person("steve", 14);
p.changeName("Kevin" + "<br/>");
document.write(p.name);

function birthyear(){
    return 2019 - this.age;
}
document.write(p.BornYear() + "<br/>");

var courses = new Array("HTML", "CSS", "JS"); 
document.write(courses[2] + "<br/>")
document.write(courses[3] + "<br/>")

var coursess = new Array(3);
coursess[0] ="HTML"
coursess[1] ="CSS"
coursess[2] ="JS"
// another way to create an array

var coursesss = new Array();
coursesss[0] ="HTML"
coursesss[1] ="CSS"
coursesss[2] ="JS"
// same way but without a constructor

var coursessss = ["HTML", "CSS", "JS"];
// another array
document.write(coursessss.length) + "<br/>"

var cc = courses.concat(coursess);
document.write(cc + "<br/>");

alert(Math.PI);
document.write(Math.sqrt(256));

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

function myAlert() {
   alert("Is this annoying?");
}
setInterval(myAlert, 10000000000000);

/*

_/_/_/_/_/_/    _/_/        _/_/_/_/_/_/  _/_/    _/_/  _/_/_/_/_/_/    _/_/_/_/_/_/    _/_/_/_/
_/_/_/_/_/_/    _/_/        _/_/_/_/_/_/  _/_/   _/_/   _/_/_/_/_/_/    _/_/_/_/_/_/  _/_/    _/_/
    _/_/        _/_/            _/_/      _/_/  _/_/    _/_/                _/_/      _/_/    _/_/
    _/_/        _/_/            _/_/      _/_/ _/_/     _/_/_/_/            _/_/      _/_/    _/_/
    _/_/        _/_/            _/_/      _/_/_/_/      _/_/_/_/            _/_/      _/_/    _/_/
    _/_/        _/_/            _/_/      _/_/ _/_/     _/_/                _/_/      _/_/    _/_/
    _/_/        _/_/            _/_/      _/_/  _/_/    _/_/                _/_/      _/_/    _/_/ 
_/_/_/_/_/_/    _/_/_/_/_/  _/_/_/_/_/_/  _/_/   _/_/   _/_/_/_/_/_/        _/_/      _/_/    _/_/
_/_/_/_/_/_/    _/_/_/_/_/  _/_/_/_/_/_/  _/_/    _/_/  _/_/_/_/_/_/        _/_/        _/_/_/_/
    
_/_/_/_/       _/_/_/_/ 
_/_/  _/_/   _/_/    _/_/
_/_/    _/   _/_/    _/_/
_/_/    _/   _/_/    _/_/
_/_/    _/   _/_/    _/_/
_/_/    _/   _/_/    _/_/
_/_/    _/   _/_/    _/_/
_/_/  _/_/   _/_/    _/_/
_/_/_/_/       _/_/_/_/     

*/ 