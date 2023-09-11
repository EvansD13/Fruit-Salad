//const x = require("./script2")
const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
const trash = document.querySelector(".fa-trash");

const delFruit = () => {
    document.querySelector("li:hover").remove()
}

const addFruit = fruit =>{
    if (!fruit){
        return null
    }
    const li = document.createElement("li")
    li.textContent = fruit 
    li.addEventListener("click", removeFruit, {once:true})
    fruitList.appendChild(li)
}

const removeFruit = e => {
    e.target.remove()
}
fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = "   "
})




//console.log(`The answer is ${x}`)