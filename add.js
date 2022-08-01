var b=document.getElementById('id3')
b.addEventListener("click",xyz);


function xyz(){
var k=0;
k=parseInt(document.getElementById('id1').value);
var l=0
l=parseInt(document.getElementById('id2').value);
var y=eval(k+l);


var x=document.getElementById('res');
x.style.color='black';

x.innerHTML=`Total sum is: ${y}`;





}





