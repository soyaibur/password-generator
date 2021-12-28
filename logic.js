// ....Univesal declaration and others......
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
).concat(
    arrayFromLowToHigh(91,96)
).concat(
    arrayFromLowToHigh(123,126)
)

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// .....All Element Selection will be undernith here...........
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')

const includeUppercase = document.getElementById('includeUppercase')
const includeNumber = document.getElementById('includeNumber')
const includeSymbols = document.getElementById('includeSymbols')
const showPassword = document.getElementsById('password')

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// .....All EventListener go undernith here...........
characterAmountRange.addEventListener('input',syncCharacterAmount)
characterAmountNumber.addEventListener('input',syncCharacterAmount)

form.addEventListener('submit',e=>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercase.checked
    const includeNumber = includeNumber.checked
    const includeSymbols = includeSymbols.checked
    
    const password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols)
    showPassword.innerHTML = password;
})

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// ......All Function will go here undernith..........
function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value 
}
function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUppercase) charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumber) charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes.concat(SYMBOL_CHAR_CODES)
   
    const passwordCharacters = []
    for(let i = 0;i < characterAmount; i++){
     const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
   }


function arrayFromLowToHigh(low,high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

