//    date mathod
document.write("<center>")
  document.write("<h1>Age calculator</h1>")
  document.write("<hr>")

document.write("<br>")
document.write("<h1>Today Date</h1>")
var abc = new Date();
document.write(abc.toDateString());
document.write("<br>")
document.write("<h1>Date of brith</h1>")
document.write("<br>")
var p = new Date(prompt("Enter your brithday date in form of mm/day/year"))

document.write(p.toDateString());
document.write("<br>")


var b = new Date();
// document.write(b)
document.write("<br>")

document.write("<h1>milisecound</h1>")
var c = b - p
document.write(Math.floor(c));


document.write("<br>")

document.write("<h1>secound</h1>")
var c = b - p
document.write(Math.floor(c/(1000)));




document.write("<br>")

document.write("<h1>minutes</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60)));



document.write("<br>")

document.write("<h1>Hours</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60*60)));


document.write("<br>")

document.write("<h1>Days</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60*60*24)));



document.write("<br>")

document.write("<h1>age/year</h1>")
var c = b - p
document.write(Math.floor(c/(1000*60*60*24)/365.25));



document.write("<hr>")

document.write("Rana Tanveer Hassan ,web developers")