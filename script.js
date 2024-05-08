const inputslider = document.getElementById("inputslider");
const sliderValue = document.getElementById("sliderValue");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generatGetBtn = document.getElementById("getBtn");
const copyIcon = document.getElementById("copy-icon");

const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLettere = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "/*-.\><?{}+_=()&^%$#@!~;,";
// to make slidervalue count ....
sliderValue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
    sliderValue.textContent = inputslider.value;
})

// genrated password :
generatGetBtn.addEventListener("click",()=>{
    passBox.value=generatePassword() //call the function
})


function generatePassword(){
    const length =inputslider.value;
    let characters = "";
    let password ="";
    
    characters +=lowercaseEl.checked ?lowerCaseLetter:""; 
    characters +=uppercaseEl.checked ?upperCaseLettere:""; 
    characters +=numberEL.checked ?number:""; 
    characters +=symbolEL.checked ?symbol:""; 
for(let i=0; i<length;i++){
    password +=characters.charAt(Math.floor(Math.random()*characters.length));
    console.log(password);

    }
return password
}


// to copy text from passbox
copyIcon.addEventListener("click",() => {
    if(passBox.value !="" || passBox.value.length>=8){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";

    setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
    },2000)
    }
})