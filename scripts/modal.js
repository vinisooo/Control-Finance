/* Desenvolva sua lógica aqui */
const modal = document.getElementsByClassName("add-value-modal-bg")[0];
const toggleModalBtn = document.querySelectorAll("#modal-toggle-btn");
const modalForm = document.getElementById("add-value-form");

function toggleModal (event){
    event.preventDefault();
    modal.classList.toggle("hidden");

    categoryID = 0;
    categoryOptions.forEach((btn)=>{
        btn.classList.remove("selected-category")
    })
}

toggleModalBtn.forEach((btn)=>{btn.addEventListener("click", toggleModal)});


const categoryOptions = document.querySelectorAll("#category-option");

let categoryID = 0;

categoryOptions.forEach((btn)=>{

    btn.addEventListener("click",(event)=>{
        if (btn.value == 1){
            categoryID = 1
            btn.classList.add("selected-category");
            categoryOptions[1].classList.remove("selected-category")
            
        }if (btn.value == 2){
            categoryID = 2
            btn.classList.add("selected-category");
            categoryOptions[0].classList.remove("selected-category")
        }
    })
    
})

const submitValueBtn = document.getElementById("submit-value");
submitValueBtn.addEventListener("click",addNewValue);

function addNewValue (event){
    event.preventDefault();

    const newValue = document.getElementById("new-value").value;
    const newValueNum = parseFloat(newValue);
    if (newValue.length != 0 && newValueNum != 0 && categoryID != 0){
         
        let newID = 0
        if (insertedValues.length == 0){
            newID = 1

        }else{
            const listLength = insertedValues.length -1;
            newID = insertedValues[listLength].id + 1;
        }

        const newObj =
        {
            id : newID,
            value : newValueNum,
            categoryID : categoryID
        };

        insertedValues.push(newObj);
        displayElementList(insertedValues);

        displayByCategory();
        categoryID = 0;
        
        modal.classList.toggle("hidden");
        modalForm.reset();
    }   
    
}