const list = document.getElementById("statement-list");
const totalValueSpan = document.getElementById("total-value");

function displayElementList(array){
    list.innerHTML = "";
    
    if (array.length == 0){
        createWarningEmpty(list)

        totalValueSpan.innerText = "R$ 00.00"
    }

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
            displayByCategory();
        })
        totalValueSum(array);

        deleteBtn.append(thrashAnimatedIcon);
        div.append(span, deleteBtn);
        newLi.append(value,div);
        list.append(newLi);
    });
    
}
displayElementList(insertedValues);


function createWarningEmpty(ul){
    ul.innerHTML = "";

    const warning = document.createElement("li");
    const warningText = document.createElement("h3");
    const cta = document.createElement("p");

    warning.classList = "empty-list-warning flex list-default direction-column align-center justify-between"
    
    warningText.innerText = "Nenhum Valor cadastrado"
    cta.innerText = "Registrar novo valor"

    warning.append(warningText, cta)
    ul.append(warning)
}


function totalValueSum(array){

    let totalValue = 0;
    array.forEach((obj) =>{
        totalValue += obj.value
    })
    
    totalValueSpan.innerText = "R$ " + totalValue.toFixed(2);
    return totalValue.toFixed(2);
}