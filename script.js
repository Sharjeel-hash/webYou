const togglePassword = document.getElementById("eye");
const passwordField = document.getElementById("password");
togglePassword.addEventListener("click", () => {
  if(passwordField.type === "password"){
    passwordField.type = "text";
    togglePassword.classList.replace("ri-eye-fill", "ri-eye-off-fill");
  }else{
    passwordField.type = "password";
    togglePassword.classList.replace("ri-eye-off-fill", "ri-eye-fill");
  }
});
const userText = ["SABOOR", "SENIOR"];
let textIndex = 0;
let index = 0;
let isDeleting = false;
function typeEffect(){
  let setText = userText[textIndex];
  let DisplayText = setText.substring(0, index);
  document.querySelector(".userText").innerHTML = DisplayText;
  if(!isDeleting && index < userText[textIndex].length){
    index++;
    setTimeout(typeEffect, 100);
  }
  else if(isDeleting && index > 0){
    index--;
    setTimeout(typeEffect, 50);
  }
  else{
    isDeleting = !isDeleting;
    if(!isDeleting){
      textIndex = (textIndex + 1) % userText.length;
    }
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();
document.querySelector(".sign-up").addEventListener("submit", (e) => {
  e.preventDefault();
  
  window.location.href = "sign_in.html";
});

window.onscroll = function(){
  updateProgressBar();
};
function updateProgressBar() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;
  document.querySelector(".progress-loader").style.width = scrollPercent + "%";
}