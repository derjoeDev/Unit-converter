/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterFeet = 3.281 
const literGallon = 0.264 
const kilogramPound = 2.204 

let conversionValue = document.getElementById("input-value")
let conversionButton = document.getElementById("input-btn")
let volumeConv = document.getElementById("volume-conv")
let lengthConv = document.getElementById("length-conv")
let massConv = document.getElementById("mass-conv")

conversionButton.addEventListener ("click", function (){
    let baseValue = conversionValue.value
        
    volumeConv.innerHTML = `${baseValue} liters = ${(baseValue * literGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue / literGallon).toFixed(2)} liters`
    
    lengthConv.innerHTML = `${baseValue} meters = ${(baseValue * meterFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue / meterFeet).toFixed(2)} meters`
    
    massConv.innerHTML = `${baseValue} kilogram = ${(baseValue * kilogramPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue / kilogramPound).toFixed(2)} kilograms`
    
    
    return baseValue
    
})

