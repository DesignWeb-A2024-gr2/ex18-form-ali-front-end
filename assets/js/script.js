const valid ='<i class="fa-solid fa-check"></i>' ;
const ban = '<i class="fa-solid fa-ban"></i>';
const lengthCarc = document.querySelector(".message.validation-longueur");
const combo = document.querySelector(".message.validation-majuscule");
const specCarc = document.querySelector(".message.validation-caractere");
const inp1 = document.getElementById("password");
const inp2 = document.getElementById("confirm-password");
const unitBar = document.querySelectorAll(".password-meter-unit");
const checkCombo = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
const icons = document.querySelectorAll(".fas");
const fullCheck = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
const form = document.getElementById("form-password")
const message = document.querySelector(".message-erreur")

inp1.addEventListener('keyup', formCheck);

function formCheck() {
    // Length check
    if (inp1.value.length < 8) {
        lengthCarc.style.color = "red";
        icons[0].innerHTML = ban

        
    } else {
        lengthCarc.style.color = "green";
        icons[0].innerHTML = valid
        
    }

    // Uppercase and lowercase combination check
    if (!checkCombo.test(inp1.value)) {
        combo.style.color = "red";
        icons[1].innerHTML = ban
       
    } else {
        combo.style.color = "green";
        icons[1].innerHTML = valid
        
    }

    // Special character check
    if (!hasSpecialChar.test(inp1.value)) {
        specCarc.style.color = "red";
        icons[2].innerHTML = ban

        
    } else {
        specCarc.style.color = "green";
        icons[2].innerHTML = valid

       
    }
    if (!inp1.value) {
        specCarc.style.color = "black";
        combo.style.color = "black";
        lengthCarc.style.color = "black";
        icons.forEach(icon=>icon.innerHTML="")
        
    }

    // Update password strength meter
    if (inp1.value.length >= 8 && checkCombo.test(inp1.value) && hasSpecialChar.test(inp1.value)) {
        unitBar[0].style.backgroundColor = "green";
        unitBar[1].style.backgroundColor = "green";
        unitBar[2].style.backgroundColor = "green";
        unitBar[3].style.backgroundColor = "green";
        unitBar[4].style.backgroundColor = "green";
    } else if (inp1.value.length >= 8 && checkCombo.test(inp1.value)) {
        unitBar[0].style.backgroundColor = "yellow";
        unitBar[1].style.backgroundColor = "yellow";
        unitBar[2].style.backgroundColor = "transparent";
        unitBar[3].style.backgroundColor = "transparent";
        unitBar[4].style.backgroundColor = "transparent";
    }
    else if (inp1.value.length >= 8 && hasSpecialChar.test(inp1.value)) {
        unitBar[0].style.backgroundColor = "yellow";
        unitBar[1].style.backgroundColor = "yellow";
        unitBar[2].style.backgroundColor = "transparent";
        unitBar[3].style.backgroundColor = "transparent";
        unitBar[4].style.backgroundColor = "transparent";
    }
    else if (hasSpecialChar.test(inp1.value) >= 8 && hasSpecialChar.test(inp1.value)) {
        unitBar[0].style.backgroundColor = "yellow";
        unitBar[1].style.backgroundColor = "yellow";
        unitBar[2].style.backgroundColor = "transparent";
        unitBar[3].style.backgroundColor = "transparent";
        unitBar[4].style.backgroundColor = "transparent";
    }
    else if(inp1.value.length >= 8 || checkCombo.test(inp1.value) || hasSpecialChar.test(inp1.value)){
        unitBar[0].style.backgroundColor = "red";

    }
    
    else {
        unitBar[0].style.backgroundColor = "transparent";
        unitBar[1].style.backgroundColor = "transparent";
        unitBar[2].style.backgroundColor = "transparent";
        unitBar[3].style.backgroundColor = "transparent";
        unitBar[4].style.backgroundColor = "transparent";
    }
}
inp2.addEventListener("keyup",(e)=>{
    if (e.target.value) {
       if (e.target.value === inp1.value) {
        inp2.style.outlineColor="green"
        message.style.display = "none"


       } else {
        inp2.style.outlineColor = "red"
        message.style.display = "block"
       }
    }else{
        return;
        
    }
})
form.onsubmit = (e) => {
    // Assuming inp1 and inp2 are your password fields, and fullCheck is your regex for validation
    if (fullCheck.test(inp1.value) && inp1.value === inp2.value) {
        
    } else {
        e.preventDefault();
        alert("Your password is not strong enough or does not match.");
    }
};

