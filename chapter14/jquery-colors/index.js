$(function(){
    $('#greenButton').on('click', function () {
        greenClicked()
    })
    $('#redButton').on('click', function () {
        redClicked()
    })
    $('#blueButton').on('click', function () {
        blueClicked()
    })
    $('#randomButton').on('click', function () {
        randomClicked(getRandomColor())
    })
})

function getRandomColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const hex = [...letters, ...digits]
    
    let color = '#' 
    for (let i = 1; i <= 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }
    
    return color   
}

 function greenClicked() {
    $('body').css('background-color', 'green')
}

function redClicked() {
    $('body').css('background-color', 'red')
}

function blueClicked() {
    $('body').css('background-color', 'blue') 
}

function randomClicked(getRandomColor) {
    $('body').css('background-color', getRandomColor)
}