const buttons=document.querySelectorAll(".btn");
const display=document.getElementById("display");
const clearbtn=document.getElementById("clear");
const equalsBtn=document.getElementById("equals");

let currentinput="";

//add number/operator to input
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        currentinput+=button.textContent;
        display.value=currentinput;
    });
});
//clears display
clearbtn.addEventListener("click",()=>{
    currentinput="";
    display.value="";
});

//claculating result
equalsBtn.addEventListener("click",()=>{
    try{
        currentinput=eval(currentinput);
        display.value=currentinput;
    }catch{
        display.value="Error";
        currentinput="";
    }
});