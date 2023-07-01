function light(){
    document.body.style.transition = "background-color 0.5s, color 0.5s";
    document.body.style.background="rgb(51,51,51)"
    document.querySelector('h1').style.color="white"
    document.getElementById('hd').style.color="white"
    document.getElementById('hd2').style.color="white"
    document.querySelector('p').style.color="white"
}
//these functions are vise versa, if you click on the sun, you are actually turning it off
//and when you click on the moon, you are actually turning on the sun
function dark(){
    document.body.style.transition = "background-color 0.5s, color 0.5s";
    document.body.style.background="rgb(221, 219, 219)";
    document.querySelector('h1').style.color="black"
    document.getElementById('hd').style.color="black"
    document.getElementById('hd2').style.color="black"
    document.querySelector('p').style.color="black"
    //document.getElementById('light').style.color="rgb(206,206,0)"
    
    
}





