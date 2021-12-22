
function myFunction() {
   var element = document.body;
   element.classList.toggle("Bow-mode");

   
   var element = document.getElementById('SiyaTOP'); 
   element.classList.toggle("Wob-mode");

    var element = document.getElementById('SiyaBOTTOM'); 
   element.classList.toggle("Wob-mode");
  
  
}



const btnT = document.getElementById("SiyaTOP");

btnT.addEventListener("click", ()=>{

    if(btnT.innerText === "WOB"){
        btnT.innerText = "BOW";
    }else{
        btnT.innerText= "WOB";
    }
    if(btnB.innerText === "WOB"){
        btnB.innerText = "BOW";
    }else{
        btnB.innerText= "WOB";
    }
    myFunction();
});

const btnB = document.getElementById("SiyaBOTTOM");

btnB.addEventListener("click", ()=>{

    if(btnB.innerText === "WOB"){
        btnB.innerText = "BOW";
    }else{
        btnB.innerText= "WOB";
    }
    if(btnT.innerText === "WOB"){
        btnT.innerText = "BOW";
    }else{
        btnT.innerText= "WOB";
    }
    myFunction();
});






