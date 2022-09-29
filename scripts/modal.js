/* Desenvolva sua lógica aqui */
const modal = document.getElementsByClassName("add-value-modal-bg")[0];
const toggleModalBtn = document.querySelectorAll("#modal-toggle-btn");

const toggleModal = (event) =>{
    event.preventDefault();
    modal.classList.toggle("hidden");
}

toggleModalBtn.forEach((btn)=>{btn.addEventListener("click", toggleModal)})