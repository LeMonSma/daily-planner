let timeContEl = $('#time-block')
const hour = moment().format('HH')

function displayDay() {
    const today = moment().format("MMM Do YYYY")

    const currentDay = document.querySelector('#currentDay')
    currentDay.append(today)
    generateDay()

}

const timeArray = ["9", '10', '11', '12', '13', '14', '15', '16', '17']

function generateDay() {


    for (i = 0; i < timeArray.length; i++) {
        let id = [i]



        let timeBlockEl = $('<div>')
        let timeBlockTimeEL = $('<p>').attr('id', id)
        timeBlockTimeEL.text(timeArray[i])
        let timeTextEl = $('<textarea>')
        timeTextEl.addClass(id)
        let timeButtonEl = $('<button>').on('click', function () {

            let hourText = $(this).siblings('.textarea').val()
            localStorage.setItem(id, hourText)

        })
        if (hour > timeArray[i]) {
            timeTextEl.addClass('past')
        } else if (hour === timeArray.values()) {
            timeTextEl.addClass('now')

        } else {
            timeTextEl.addClass('future')
        }




        console.log(timeArray[i])



        let buttonSpanEl = $('<span>')
        timeBlockEl.addClass('row time-block')
        timeBlockTimeEL.addClass('col-md-1')
        timeTextEl.addClass(`col-md-10 textarea ${id}`)
        timeTextEl.val(localStorage.getItem(i))
        timeButtonEl.addClass('col-md-1 saveBtn')
        buttonSpanEl.addClass('glyphicon glyphicon-floppy-disk')
        timeContEl.addClass('column')
        timeButtonEl.append(buttonSpanEl)
        timeBlockEl.append(timeBlockTimeEL, timeTextEl, timeButtonEl)
        timeContEl.append(timeBlockEl)

    }
}



displayDay()


