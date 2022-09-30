const changeCategory = document.querySelectorAll("#change-category");

changeCategory.forEach(element => {
    element.addEventListener("click",toggleSelectedClass)
    element.addEventListener("click",filterCategory);
});

function toggleSelectedClass(event){
    const category = event.target;
    const categoriesClasses = document.getElementsByClassName("selected-category");

    let categoriesClassesArr = Array.from(categoriesClasses);

    categoriesClassesArr.forEach((element)=>{
        element.classList.remove("selected-category")
    })

    category.classList.add("selected-category");
}
function filterCategory(event){
    const category = event.target;

    if (category.value == "insertedValues"){
        displayElementList(insertedValues);
    }

    if (category.value == "cashIn"){
        cashIn = insertedValues.filter((element)=>{
            return element.categoryID == 1
        })
        displayElementList(cashIn);
    }if (category.value == "cashOut"){
        cashOut = insertedValues.filter((element)=>{
            return element.categoryID == 2
        })
        displayElementList(cashOut);
    }
}


function displayByCategory(){
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
}
