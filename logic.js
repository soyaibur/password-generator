// ....Univesal declaration and others......
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here...........
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener go undernith here...........
characterAmountRange.addEventListener('input',syncCharacterAmount)
characterAmountNumber.addEventListener('input',syncCharacterAmount)
form.addEventListener('submit',e=>{
    e.preventDefault()
    
})

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith..........
function syncCharacterAmount(e){
const value = e.target.value
characterAmountNumber.value = value
characterAmountRange.value = value
}


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// characterAmountRange.addEventListener('click',()=>{
//     alert("this is working")
// })
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::