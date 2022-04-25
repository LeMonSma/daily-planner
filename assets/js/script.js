let timeContEl = $('#time-block')

function displayDay() {
    const today = moment().format("MMM Do YYYY")
    const currentDay = document.querySelector('#currentDay')
    currentDay.append(today)
    generateDay()

}

const timeArray = ["9am", '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

function generateDay() {


    for (i = 0; i < timeArray.length; i++) {
        let id = [i]



        let timeBlockEl = $('<div>')
        let timeBlockTimeEL = $('<p>').attr('id', id)
        timeBlockTimeEL.text(timeArray[i])
        let timeTextEl = $('<textarea>')
        let timeButtonEl = $('<button>').on('click', function () {

            let hourText = $(this).siblings('.textarea').val()
            localStorage.setItem(id, hourText)

        })




        let buttonSpanEl = $('<span>')
        timeBlockEl.addClass('row time-block')
        timeBlockTimeEL.addClass('col-md')
        timeTextEl.addClass('col-md-10 textarea')
        timeTextEl.innerHTML = localStorage.getItem(id)
        timeButtonEl.addClass('col-md saveBtn')
        buttonSpanEl.addClass('fa-solid fa-floppy-disk fa-large')
        timeContEl.addClass('column')
        timeButtonEl.append(buttonSpanEl)
        timeBlockEl.append(timeBlockTimeEL, timeTextEl, timeButtonEl)
        timeContEl.append(timeBlockEl)

    }
}




displayDay()


