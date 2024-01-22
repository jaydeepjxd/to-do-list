const input = document.querySelector(".row input");
const button = document.querySelector(".row button");
const listContainer = document.querySelector(".list-container")



function addTask() {
    if(input.value == ""){
        alert("Please Enter Some Task");
    }
    else {
        let newItem = document.createElement("li");
        newItem.innerHTML = input.value;
        listContainer.appendChild(newItem);
        input.value = "";

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newItem.appendChild(span);

        saveData();
    }
}

listContainer.addEventListener("click", (e)=> {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function reload(){
    listContainer.innerHTML = localStorage.getItem("data");
}

reload();