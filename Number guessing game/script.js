document.getElementById('btn1').style.visibility = "hidden"
document.getElementById('box1').style.visibility = "hidden"

document.getElementById('btn2').style.visibility = "hidden"
document.getElementById('box2').style.visibility = "hidden"

document.getElementById('btn3').style.visibility = "hidden"

document.getElementById('btn4').style.visibility = "hidden"

document.getElementById('btn5').style.visibility = "hidden"


var num1 = Math.floor(Math.random() * (51 - 0) + 0)
num2 = Math.floor(Math.random() * (51 - 0) + 0)
num3 = Math.floor(Math.random() * (51 - 0) + 0)

function myfunction(){
if(userInput.value >= 0.5 && userInput.value < 50.5){
    message.innerHTML =  Math.round(userInput.value)
    document.getElementById('btn1').style.visibility = "visible"
    document.getElementById('box1').style.visibility = "visible"
 
}else{
    alert("Enter a number between 1 and 50")
    userInput.value = ""
   
}
}

function fun(){
document.location.reload()
}

function fun1(){
if(box1.value >= 0.5 && box1.value < 50.5){ 
    text1.innerHTML = Math.round(box1.value)
    document.getElementById('btn2').style.visibility = "visible"
    document.getElementById('box2').style.visibility = "visible"

}else{
     alert("Enter a number between 1 and 50")
    box1.value = ""
    
}
}

function fun2(){
if(box2.value >= 0.5 && box2.value < 50.5){
    text2.innerHTML = Math.round(box2.value)
    document.getElementById('btn3').style.visibility = "visible"
}else{
     alert("Enter a number between 1 and 50")
     box2.value = ""   
}
}

function fun4(){
text.innerHTML = "Your numbers are: "+ message.innerHTML + '; '+ text1.innerHTML + '; '+ text2.innerHTML
 document.getElementById('btn4').style.visibility = "visible"
 document.getElementById('btn').style.visibility = "hidden"
 document.getElementById('btn1').style.visibility = "hidden"
 document.getElementById('btn2').style.visibility = "hidden"
 document.getElementById('btn3').style.visibility = "hidden"
}

function fun3(){
if( (message.innerHTML == num1 || message.innerHTML == num2 || message.innerHTML == num3) && (text1.innerHTML == num1 || text1.innerHTML == num2 || text1.innerHTML == num3) && (text2.innerHTML == num1 || text2.innerHTML == num2 || text2.innerHTML == num3) ){
    text3.innerHTML = "The winning numbers are: "+ num1 + '; ' + num2 + '; ' + num3 + '. '+"  CONGRATULATIONS YOU WON THE GAME"
    document.getElementById("text3").style.color = "green"
    document.getElementById('btn5').style.visibility = "visible"
}else{
    text3.innerHTML = "The winning numbers are: "+ num1 + '; ' + num2 + '; ' + num3 + '. '+"  Tough luck you lost"
    document.getElementById("text3").style.color = "red"
    document.getElementById('btn5').style.visibility = "visible"
}
}

//function fun(){
//alert('testing 1..2')
//}