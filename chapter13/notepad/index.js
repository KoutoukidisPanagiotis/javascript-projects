const daysGR = ['Κυριακη', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου',  'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου',  'Οκτωβρίου','Νοεμβρίου', 'Δεκεμβρίου']

window.addEventListener('DOMContentLoaded', function() {
    this.setInterval(printDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function () {
        insertNote(document.querySelector('#noteInput').value)
        reset()
    })

    this.document.querySelector('#noteInput').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            insertNote(document.querySelector('#noteInput').value)
        reset()
        }
        
    })
})

function printDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    let dayStr = daysGR[day]
    let monthStr = monthsGR[month]
    let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:
                    ${(minutes < 10) ? '0' : ''}${minutes}:
                    ${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#date').innerHTML = dateStr + "<br>" + timeStr
}

function insertNote(note) {

    if(!note) return

    let clone = document.querySelector('.hidden.note').cloneNode(true)
    clone.classList.remove('hidden')

    clone.querySelector('.note-button').addEventListener('click', function() {
        deleteNote(this.parentNode)
    })

    clone.querySelector('.checkbox-label').innerHTML = note
    document.querySelector('.note-area').appendChild(clone)

}

function reset () {
    document.querySelector('#noteInput').value =''
}


function deleteNote(note) {
    note.remove()
}
