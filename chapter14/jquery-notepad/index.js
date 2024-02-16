const daysGR = ['Κυριακη', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου',  'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου',  'Οκτωβρίου','Νοεμβρίου', 'Δεκεμβρίου']

$(function() {
    setInterval(printDate, 1000)

    $('#addNoteBtn').on('click', function () {
        insertNote($('#noteInput').val())
        reset()
    })

    $('#noteInput').on('keyup', function (e) {
        if (e.key === 'Enter') {
            insertNote($('#noteInput').val())
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

    $('#date').html(dateStr + "<br>" + timeStr)
}

function insertNote(note) {

    if(!note) return

    let clone = $('.hidden.note').clone().removeClass('hidden')

    clone.find('.note-button').on('click', function() {
        deleteNote($(this).parent())
    })

    clone.find('.checkbox-label').html(note)
    $('.note-area').append(clone)

}

function reset () {
    $('#noteInput').val('')
}


function deleteNote(note) {
    note.remove()
}
