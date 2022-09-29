const list = document.getElementById("statement-list");

function displayElementList(array){
    list.innerHTML = "";

    array.forEach(obj => {
        

        const newLi = document.createElement("li");
        const value = document.createElement("h3");
        const div = document.createElement("div");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");
        const thrashAnimatedIcon = document.createElement("lordicon");

        newLi.classList = "list-default flex justify-between align-center"
        newLi.id = obj.id
        span.classList = "category-span"
        div.classList = "right-side flex align-center"
        deleteBtn.classList = "delete-element flex justify-center align-center"
        thrashAnimatedIcon.classList = "delete-element-icon"

        value.innerText = `R$ ${obj.value.toFixed(2)}`

        obj.categoryID === 1? span.innerText = "Entrada": span.innerText="Saída"

        thrashAnimatedIcon.innerHTML =
        `
        <lord-icon
            src="https://cdn.lordicon.com/qsloqzpf.json"
            trigger="hover"
            width="100%"
            class="delete-element-icon">
        </lord-icon>
        `

        deleteBtn.addEventListener("click",(event)=>{
            event.preventDefault();
            const toDeleteID = event.target.closest("li").id;
            insertedValues.filter((obj,index)=>{
                if (obj.id == toDeleteID){
                    insertedValues.splice(index, 1)
                }
            })
            const currentCategory = document.getElementsByClassName("selected-category")[0];
            if(currentCategory.value == "insertedValues"){
                displayElementList(insertedValues);
            }
            if (currentCategory.value == "cashIn"){
                cashIn = insertedValues.filter((element)=>{
                    return element.categoryID == 1
                })
                displayElementList(cashIn);
            }if (currentCategory.value == "cashOut"){
                cashOut = insertedValues.filter((element)=>{
                    return element.categoryID == 2
                })
                displayElementList(cashOut);
            }
        })

        deleteBtn.append(thrashAnimatedIcon);
        div.append(span, deleteBtn);
        newLi.append(value,div);
        list.append(newLi);
    });
    
}

displayElementList(insertedValues);