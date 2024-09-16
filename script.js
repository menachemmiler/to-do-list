

const theInput = document.querySelector("#inputMissiom")

const missionsDiv = document.querySelector("#missionsDiv")






const fresh = () => {
    missionsDiv.textContent = "";
    for(const m of allMissions){
        const newDiv = document.createElement("div");
        const newLable = document.createElement("lable");
        const newCheckbox = document.createElement("input");
        if(made.includes(m)){
            newLable.style.textDecoration = "line-through";
            newCheckbox.checked = true;
        }
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🚮";
        const removeFunc = () => {
            const index = allMissions.indexOf(m);
            allMissions.splice(index, 1);
            localStorage.setItem("allMissions", JSON.stringify(allMissions));
            const indexMade1 = made.indexOf(m);
            if(indexMade1 != -1){
                made.splice(indexMade1, 1)
                localStorage.setItem("made", JSON.stringify(made));
            }
            fresh();
        }
        deleteButton.addEventListener("click", () => {
            removeFunc();
        })
        newCheckbox.type = "checkbox";
        newCheckbox.addEventListener("change", () => {
            if(newCheckbox.checked){
                newLable.style.textDecoration = "line-through";
                made.push(m);
            }else{
                newLable.style.textDecoration = "";
                let index_5 = made.indexOf(m);
                if(index_5 != -1){
                    made.splice(index_5, 1)
                }
            }
            localStorage.setItem("made", JSON.stringify(made));
        })
        newDiv.className = "mission";
        missionsDiv.appendChild(newDiv);
        newLable.textContent = m;
        newDiv.appendChild(deleteButton);
        newDiv.appendChild(newLable);
        newDiv.appendChild(newCheckbox);
    }
}



let allMissions = [];
let made = [];



const tryGetAllMissions = localStorage.allMissions;
if(tryGetAllMissions){
    allMissions = JSON.parse(tryGetAllMissions);
}

const tryGetMade = localStorage.made;
if(tryGetMade){
    made = JSON.parse(tryGetMade);
}

fresh();









const addMission = (text) => {
    allMissions.push(text);
    localStorage.setItem("allMissions", JSON.stringify(allMissions));
    fresh();
}




const buttonAdd = document.querySelector("#add");

const toAddFunc = () => {
    if(theInput.value != ""){
        addMission(theInput.value);
    }
    else{
        alert("!לא הכנסת כלום")
    }
    theInput.value = "";
}

buttonAdd.addEventListener("click", () => {
    toAddFunc();
});


theInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        toAddFunc();
    }
})




















