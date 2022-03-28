let timeContEl = $('#time-block')

function displayDay() {
    const today = moment().format("MMM Do YYYY")
    const currentDay = document.querySelector('#currentDay')
    currentDay.append(today)
    displayTime()

}

const timeArray = ["9am", '10am', '11am', '12pm,', '1pm', '2pm', '3pm', '4pm', '5pm']

function displayTime() {
    for (i = 0; i < timeArray.length; i++) {
        let timeBlockEl = $('<div>')
        let timeBlockTimeEL = $('<p>')
        timeBlockTimeEL.text(timeArray[i])
        let timeTextEl = $('<textarea>')
        let timeButtonEl = $('<button>')
        timeBlockEl.addClass('col-md')
        timeBlockTimeEL.addClass('hour')
        timeTextEl.addClass('description col-md-10 textarea')
        timeButtonEl.addClass('savBtn')
        timeContEl.addClass('column')
        timeBlockEl.append(timeBlockTimeEL, timeTextEl, timeButtonEl)
        timeContEl.append(timeBlockEl)


    }
}
displayDay()