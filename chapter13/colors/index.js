window.addEventListener('DOMContentLoaded',function(){
    this.document.querySelector('#greenButton').addEventListener('click', function () {
        greenClicked()
    })
    this.document.querySelector('#redButton').addEventListener('click', function () {
        redClicked()
    })
    this.document.querySelector('#blueButton').addEventListener('click', function () {
        blueClicked()
    })
    this.document.querySelector('#randomButton').addEventListener('click', function () {
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
    document.body.style.backgroundColor = "green" 
}

function redClicked() {
    document.body.style.backgroundColor = "red" 
}

function blueClicked() {
    document.body.style.backgroundColor = "blue" 
}

function randomClicked(getRandomColor) {
    document.body.style.backgroundColor = getRandomColor
}