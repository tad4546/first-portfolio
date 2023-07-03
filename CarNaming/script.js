
let cars = [
  "Acura",
  "Alpine",
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "Bajaj",
  "Buick",
  "BMW",
  "Bugatti",
  "Bac",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "Diahatsu",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Genesis",
  "GMC",
  "Honda",
  "Haval",
  "Hummer",
  "Hennesy",
  "Hyundai",
  "Infiniti",
  "Isuzu",
  "Jaguar",
  "JMC",
  "Jeep",
  "Kia",
  "Koenigsegg",
  "KTM",
  "Lancia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Mahindra",
  "Mazda",
  "McLaren",
  "Mercedes Benz",
  "Mini Cooper",
  "Mitsubishi",
  "Nissan",
  "Noble",
  "Opel",
  "Pagani",
  "Peugeot",
  "Polestar",
  "Porsche",
  "Proton",
  "Ram",
  "Renault",
  "Rolls Royce",
  "Rimac",
  "RUF",
  "SEAT",
  "Skoda",
  "Smart",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Tata",
  "Volkswagen",
  "Volvo",
  "Vauxhall",
  "Zenvo"
];
let arr = cars.map(element => element.toUpperCase())


let lettersArr =['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'R', 'S', 'T', 'V', 'Z'];
  
let button1 = document.getElementById("btn1");
let score_1 = 0;
let score_2 = 0
let button2 = document.getElementById("btn2");
let buttonNext = document.getElementById("next");
let buttonPrevious = document.getElementById("previous");
let currentLetterIndex = 0;
document.getElementById("letters").innerHTML = lettersArr[currentLetterIndex]
  
//function to check if inputs are equal to the values as well as adding the score
let addScore = (inputValue, playerScore, counter, inputField) => {
    
    if( document.getElementById(inputField).value === ""){
       window.alert("Input field cannot be empty!");
       document.getElementById(inputField).disabled = false;
   }
   
   let regex;
   
   
   //for A
   if(lettersArr[currentLetterIndex] === "A"){
      if (inputValue.toUpperCase().startsWith("ABA")) {
        regex = /^ABARTH/;
      }
      else if (inputValue.toUpperCase().startsWith("ACU")) {
        regex = /^ACURA/;
      }
      else if (inputValue.toUpperCase().startsWith("ALP")) {
        regex = /^ALPINE/;
      }
      else if (inputValue.toUpperCase().startsWith("ALFA")) {
        regex = /^ALFA ROMEO/;
      }
      else if (inputValue.toUpperCase().startsWith("ASTON")) {
        regex = /^ASTON MARTIN/;
      }
      else if (inputValue.toUpperCase().startsWith("AUD")) {
        regex = /^AUDI/;
      }
      else {
        regex = /^$/; // Empty regex to indicate no match
      }
      if (arr.some(brand => regex.test(brand))) {
        let index = arr.findIndex(brand => regex.test(brand))
        arr.splice(index, 1)
        counter += 10
        document.getElementById(playerScore).textContent = counter     
    }
        return counter
    }
   //for A END

   //for B
  else if(lettersArr[currentLetterIndex] === "B"){
    if (inputValue.toUpperCase().startsWith("BENT")) {
      regex = /^BENTLEY/;
    }
    else if (inputValue.toUpperCase().startsWith("BAJ")) {
      regex = /^BAJAJ/;
    }
    else if (inputValue.toUpperCase().startsWith("BUI")) {
      regex = /^BUICK/;
    }
    else if (inputValue.toUpperCase().startsWith("BM")) {
      regex = /^BMW/;
    }
    else if (inputValue.toUpperCase().startsWith("BUG")) {
      regex = /^BUGATTI/;
    }
    else if (inputValue.toUpperCase().startsWith("BAC")) {
      regex = /^BAC/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for B END

   //for C
   else if(lettersArr[currentLetterIndex] === "C"){
    if (inputValue.toUpperCase().startsWith("CHRY")) {
      regex = /^CHRYSLER/;
    }
    else if (inputValue.toUpperCase().startsWith("CADI")) {
      regex = /^CADILLAC/;
    }
    else if (inputValue.toUpperCase().startsWith("CHEV")) {
      regex = /^CHEVROLET/;
    }
    else if (inputValue.toUpperCase().startsWith("CIT")) {
      regex = /^CITROEN/;
    }
    else if (inputValue.toUpperCase().startsWith("CUP")) {
      regex = /^CUPRA/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for C END

   //for D 
   else if(lettersArr[currentLetterIndex] === "D"){
    if (inputValue.toUpperCase().startsWith("DAC")) {
      regex = /^DACIA/;
    }
    else if (inputValue.toUpperCase().startsWith("DOD")) {
      regex = /^DODGE/;
    }
    else if (inputValue.toUpperCase().startsWith("DIA")) {
      regex = /^DIAHATSU/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for D END

   //for F
   else if(lettersArr[currentLetterIndex] === "F"){
    if (inputValue.toUpperCase().startsWith("FER")) {
      regex = /^FERRARI/;
    }
    else if (inputValue.toUpperCase().startsWith("FIA")) {
      regex = /^FIAT/;
    }
    else if (inputValue.toUpperCase().startsWith("FOR")) {
      regex = /^FORD/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for F END

   //for G
   else if(lettersArr[currentLetterIndex] === "G"){
    if (inputValue.toUpperCase().startsWith("GM")) {
      regex = /^GMC/;
    }
    else if (inputValue.toUpperCase().startsWith("GEN")) {
      regex = /^GENESIS/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for G END

   //for H
   else if(lettersArr[currentLetterIndex] === "H"){
    if (inputValue.toUpperCase().startsWith("HUM")) {
      regex = /^HUMMER/;
    }
    else if (inputValue.toUpperCase().startsWith("HAV")) {
      regex = /^HAVAL/;
    }
    else if (inputValue.toUpperCase().startsWith("HON")) {
      regex = /^HONDA/;
    }
    else if (inputValue.toUpperCase().startsWith("HYU")) {
      regex = /^HYUNDAI/;
    }
    else if (inputValue.toUpperCase().startsWith("HEN")) {
      regex = /^HENNESY/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for H END

   //for I
   else if(lettersArr[currentLetterIndex] === "I"){
    if (inputValue.toUpperCase().startsWith("INF")) {
      regex = /^INFINITI/;
    }
    else if (inputValue.toUpperCase().startsWith("ISU")) {
      regex = /^ISUZU/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for I END

   //for J
   else if(lettersArr[currentLetterIndex] === "J"){
    if (inputValue.toUpperCase().startsWith("JMC")) {
      regex = /^JMC/;
    }
    else if (inputValue.toUpperCase().startsWith("JEE")) {
      regex = /^JEEP/;
    }
    else if (inputValue.toUpperCase().startsWith("JAG")) {
      regex = /^JAGUAR/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for J END

   //for K
   else if(lettersArr[currentLetterIndex] === "K"){
    if (inputValue.toUpperCase().startsWith("KOE")) {
      regex = /^KOENIGSEGG/;
    }
    else if (inputValue.toUpperCase().startsWith("KIA")) {
      regex = /^KIA/;
    }
    else if (inputValue.toUpperCase().startsWith("KTM")) {
      regex = /^KTM/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
           
  }
      return counter 
    }
   
   //for K END

   //for L
   else if(lettersArr[currentLetterIndex] === "L"){
    if (inputValue.toUpperCase().startsWith("LAMBO")) {
      regex = /^LAMBORGHINI/;
    }
    else if (inputValue.toUpperCase().startsWith("LAND")) {
      regex = /^LAND ROVER/;
    }
    else if (inputValue.toUpperCase().startsWith("LEX")) {
      regex = /^LEXUS/;
    }
    else if (inputValue.toUpperCase().startsWith("LIN")) {
      regex = /^LINCOLN/;
    }
    else if (inputValue.toUpperCase().startsWith("LOT")) {
      regex = /^LOTUS/;
    }
    else if (inputValue.toUpperCase().startsWith("LAN")) {
      regex = /^LANCIA/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for L END

   //for M
   else if(lettersArr[currentLetterIndex] === "M"){
    if (inputValue.toUpperCase().startsWith("MAS")) {
      regex = /^MASERATI/;
    }
    else if (inputValue.toUpperCase().startsWith("MAHI")) {
      regex = /^MAHINDRA/;
    }
    else if (inputValue.toUpperCase().startsWith("MAZ")) {
      regex = /^MAZDA/;
    }
    else if (inputValue.toUpperCase().startsWith("MCL")) {
      regex = /^MCLAREN/;
    }
    else if (inputValue.toUpperCase().startsWith("MERC")) {
      regex = /^MERCEDES BENZ/;
    }
    else if (inputValue.toUpperCase().startsWith("MINI")) {
      regex = /^MINI COOPER/;
    }
    else if (inputValue.toUpperCase().startsWith("MIT")) {
      regex = /^MITSUBISHI/
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for M END

   //for N
   else if(lettersArr[currentLetterIndex] === "N"){
    if (inputValue.toUpperCase().startsWith("NIS")) {
      regex = /^NISSAN/;
    }
    else if (inputValue.toUpperCase().startsWith("NOB")) {
      regex = /^NOBLE/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for N END

   //for O
   else if(lettersArr[currentLetterIndex] === "O"){
    if (inputValue.toUpperCase().startsWith("OPE")) {
      regex = /^OPEL/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for O END

   //for P
   else if(lettersArr[currentLetterIndex] === "P"){
    if (inputValue.toUpperCase().startsWith("PAG")) {
      regex = /^PAGANI/;
    }
    else if (inputValue.toUpperCase().startsWith("PEU")) {
      regex = /^PEUGEOT/;
    }
    else if (inputValue.toUpperCase().startsWith("POL")) {
      regex = /^POLESTAR/;
    }
    else if (inputValue.toUpperCase().startsWith("POR")) {
      regex = /^PORSCHE/;
    }
    else if (inputValue.toUpperCase().startsWith("PRO")) {
      regex = /^PROTON/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for P END

   //for R
   else if(lettersArr[currentLetterIndex] === "R"){
    if (inputValue.toUpperCase().startsWith("RAM")) {
      regex = /^RAM/;
    }
    else if (inputValue.toUpperCase().startsWith("REN")) {
      regex = /^RENAULT/;
    }
    else if (inputValue.toUpperCase().startsWith("ROLLS")) {
      regex = /^ROLLS ROYCE/;
    }
    else if (inputValue.toUpperCase().startsWith("RIM")) {
      regex = /^RIMAC/;
    }
    else if (inputValue.toUpperCase().startsWith("RUF")) {
      regex = /^RUF/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for R END

   //for S
   else if(lettersArr[currentLetterIndex] === "S"){
    if (inputValue.toUpperCase().startsWith("SEAT")) {
      regex = /^SEAT/;
    }
    else if (inputValue.toUpperCase().startsWith("SKO")) {
      regex = /^SKODA/;
    }
    else if (inputValue.toUpperCase().startsWith("SMAR")) {
      regex = /^SMART/;
    }
    else if (inputValue.toUpperCase().startsWith("SUB")) {
      regex = /^SUBARU/;
    }
    else if (inputValue.toUpperCase().startsWith("SUZU")) {
      regex = /^SUZUKI/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for S END

   //for T
   else if(lettersArr[currentLetterIndex] === "T"){
    if (inputValue.toUpperCase().startsWith("TATA")) {
      regex = /^TATA/;
    }
    else if (inputValue.toUpperCase().startsWith("TES")) {
      regex = /^TESLA/;
    }
    else if (inputValue.toUpperCase().startsWith("TOYO")) {
      regex = /^TOYOTA/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for T END

   //for V
   else if(lettersArr[currentLetterIndex] === "V"){
    if (inputValue.toUpperCase().startsWith("VOLVO")) {
      regex = /^VOLVO/;
    }
    else if (inputValue.toUpperCase().startsWith("VOLK")) {
      regex = /^VOLKSWAGEN/;
    }
    else if (inputValue.toUpperCase().startsWith("VAU")) {
      regex = /^VAUXHALL/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for V END

   //for Z
   else if(lettersArr[currentLetterIndex] === "Z"){
    if (inputValue.toUpperCase().startsWith("ZEN")) {
      regex = /^ZENVO/;
    }
    else {
      regex = /^$/; // Empty regex to indicate no match
    }
    if (arr.some(brand => regex.test(brand))) {
      let index = arr.findIndex(brand => regex.test(brand))
      arr.splice(index, 1)
      counter += 10
      document.getElementById(playerScore).textContent = counter
         
  }
      return counter 
   }
   //for Z END
}

let clicked1 = false;
let clicked2 = false;
button1.addEventListener("click", function(){
    document.getElementById("input1").disabled = true;
    score_1 = addScore(input1.value, "score1", score_1, "input1");
   clicked1 = true;
})

button2.addEventListener("click", function(){
   document.getElementById("input2").disabled = true;
   score_2 = addScore(input2.value, "score2", score_2, "input2");
   clicked2 = true//input2.value;
})

//confetti
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 1}s`;
    confettiContainer.appendChild(confetti);
  }
}
function getRandomColor() {
  const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']; // Add more colors as needed
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
//confetti END

//event handler for next button
document.getElementById("confetti").style.display = "none";
buttonNext.addEventListener("click", function(){
   if(clicked1 == false || clicked2 == false){
    buttonNext.disabled = true;
    window.alert("Press Enter to confirm!")
   }
   else{
      if(currentLetterIndex == 19){
        document.getElementById("confetti").style.display = "block";
        createConfetti();
        buttonNext.disabled = true
        if(score_1 > score_2){
          document.getElementById("congrats").innerHTML = "Player 1 Wins!";
        }else if(score_2 > score_1){
          document.getElementById("congrats").innerHTML = "Player 2 Wins!";
        }else{
          document.getElementById("congrats").innerHTML = "It's a draw!";
        }
      }
      else if( document.getElementById("input1").value == "" ||  document.getElementById("input2").value == ""){
        window.alert("⚠️Input field cannot be empty!")
      }
      else{
        currentLetterIndex++;
        document.getElementById("letters").innerHTML = lettersArr[currentLetterIndex];
        document.getElementById("input1").disabled = false;
        document.getElementById("input2").disabled = false;
        document.getElementById("input1").value= "";
        document.getElementById("input2").value = "";
        clicked1 = false;
        clicked2 = false;
      }
    }
})

//THIS BUTTON HAS BEEN REMOVED
buttonPrevious.hidden = true
buttonPrevious.addEventListener("click", function(){
  buttonPrevious = hidden
  
  if(currentLetterIndex == 0){
    buttonPrevious.disabled = true
  }
  else {
    currentLetterIndex--;
    document.getElementById("letters").innerHTML = lettersArr[currentLetterIndex]
  }
  
})
//BUTTON ABOVE HAS BEEN REMOVED 


//for which page shows up when what is clicked
const menu = document.getElementById("menu");
const instructions = document.getElementById("instructions");
const game = document.getElementById("game")
const surprise = document.getElementById("surprise");

const instruct = document.getElementById("instruct");
const play = document.getElementById("play");
const surpriseMe = document.getElementById("surpriseMe");

const back = document.getElementById("back");
const playNav = document.getElementById("playNav")
instruct.style.display = "none";
game.style.display = "none";
surprise.style.display = "none";

play.addEventListener("click", function(){
  menu.style.display = "none";
  game.style.display = "block";
})

playNav.addEventListener("click", function(){
  location.reload();
})
back.addEventListener("click", function(){
  location.reload();
})

instructions.addEventListener("click", function(){
  menu.style.display = "none";
  instruct.style.display = "block";
})

//document.getElementById("gameOver").style.display = "none";
