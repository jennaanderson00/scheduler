// CRITERIA
// current day displays at the top of calendar
// standard business hours time blocks
// blocks are color-coded for past, present, and future
// can enter events on time blocks
// can save events in localStorage and give alert
// saved events persist

// PSEUDOCODE
// create an array for time blocks
// display input in innerHtml
// set and get data from localStorage
// window.alert for saved data

// add saved event types from localStorage to event type dropdown
// add event to the selected timeblock based on time selected in event creation input form
// link selected icons from event types 
// display icons based on event type input
// if repeating checkbox is selected, show frequency dropdown in innerHtml
// repeat event based on selected frequency

// Array of time block objects 
// e.g. [{startTime: 9 am, content: "placeholder", color: "grey"}, ...]
var timeBlocks = [];

$(function() {
    $('#event-creation').css("display", "none");
    // Format todays date now
    var now = moment().format( "MM-DD-YYYY");
    // Use innerText or InnerHTML to put date inside element
    $('#currentDay').html(now);

    // Loop from 9 am to 5 pm and populate timeBlocks with objects 
    const currHour = moment().hour();
    for (i = 9; i < 18; i++) {
        // Check if i (time/hour) is less than, current or after current hour
        var timeBlockObj;
        if (i < currHour) {
            timeBlockObj = {startTime: i, content: '', color: 'grey'};
        } else if (i == currHour) {
            timeBlockObj = {startTime: i, content: '', color: 'green'};
        } else {
            timeBlockObj = {startTime: i, content: '', color: 'red'};
        }
        timeBlocks.push(timeBlockObj);
    }
    console.log(timeBlocks);

    // Loop through timeBlocks and display / load into dom the content 
    for (i = 0; i < timeBlocks.length; i++) {
        var timeBlockElement = $('<div></div>');
        var timeBlockStartTime = $('<p></p>');
        var timeBlockContent = $('<div></div>');
        var timeBlockInput = $('<input></input>');
        var timeBlockColor = $('<p></p>');

        // Fill attributes element with content
        timeBlockStartTime.html(timeBlocks[i].startTime);
        timeBlockColor.html(timeBlocks[i].color);
        timeBlockInput.val(timeBlocks[i].content);

        // Append attribute elements to time block element
        timeBlockContent.append(timeBlockInput);
        timeBlockElement.append(timeBlockStartTime, timeBlockContent, timeBlockColor);
        $('#time-blocks').append(timeBlockElement);
    }

    save();
    retrieve();
    print();
})


function save(){
    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
}

function retrieve(){
    timeBlocks = JSON.parse(localStorage.getItem("timeBlocks"));
}

function print(){
    console.log('==> time blocks ', timeBlocks);
}