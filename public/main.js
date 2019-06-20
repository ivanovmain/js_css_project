const login = document.getElementById("login");
const modal = document.getElementById("modal");
const modalWrapper =  document.getElementById("modal-wrapper");
const loginBtn = document.getElementById("button-login");
const cancelBtn = document.getElementById("button-cancel");
const closeBtn = document.getElementById("close-button");


login.addEventListener("click", function(e){
    modal.style.display = "block";
    modalWrapper.style.display = "flex";
    
    

});

function close(e){
  if(e.target != this){
        return;
    } 
    console.log(this);
    console.log(e.target);
    
    
        modalWrapper.style.display = "none";
        modal.style.display = "none";  
}

loginBtn.addEventListener("click", close);
cancelBtn.addEventListener("click", close);
modalWrapper.addEventListener("click", close);
closeBtn.addEventListener("click", close);

