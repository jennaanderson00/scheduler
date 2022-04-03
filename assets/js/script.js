// CRITERIA
// current day displays at the top of calendar
// standard business hours time blocks
// blocks are color-coded for past, present, and future
// can enter events on time blocks
// can save events in localStorage and give alert
// saved events persist

// Array of time block objects 
// e.g. [{startTime: 9 am, content: "placeholder", color: "grey"}, ...]
var timeBlocks = [];

$(function() {
    // placing retrieve here causes currHour to run twice
    // Format todays date now
    var now = moment().format( "MM-DD-YYYY");
    // Use innerText or InnerHTML to put date inside element
    $('#currentDay').html(now);

    var timeBlockElement = $('<div></div>');

    // Loop from 9 am to 5 pm and populate timeBlocks with objects 
    const currHour = moment().hour();
    for (i = 9; i < 18; i++) {
        // Check if i (time/hour) is less than, current or after current hour
        var timeBlockObj;
        if (i < currHour) {
            timeBlockObj = {icon: '', startTime: i, content: ''};
            $('#time-blocks').className = 'past';
            // change background color
        } else if (i == currHour) {
            timeBlockObj = {icon: '', startTime: i, content: ''};
            $('#time-blocks').className = 'present';
        } else {
            timeBlockObj = {icon: '', startTime: i, content: ''};
            $('#time-blocks').className = 'future';
        }
        timeBlocks.push(timeBlockObj);
    }
    console.log(timeBlocks);

    //change bg color
    function changeColor() {
        if (i < currHour) {
            timeBlockElement.classname = "past";
        } else if (i == currHour) {
            timeBlockElement.classname = "present";
        } else {
            timeBlockElement.classname = "future";
        }
    }
    

    // Loop through timeBlocks and display/load the content into the dom 
    for (i = 0; i < timeBlocks.length; i++) {
        var timeBlockIcons = $('<div class="icon"></div>')
        timeBlockElement;
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

    changeColor();

    // icons
    var icon9 = $('<i class="fa-solid fa-clock-nine"></i>');
    var icon10 = $('<i class="fa-solid fa-clock-ten"></i>');
    var icon11 = $('<i class="fa-solid fa-clock-eleven"></i>');
    var icon12 = $('<i class="fa-solid fa-clock-twelve"></i>')
    var icon1 = $('<i class="fa-solid fa-clock-one"></i>')
    var icon2 = $('<i class="fa-solid fa-clock-two"></i>')
    var icon3 = $('<i class="fa-solid fa-clock-three"></i>')
    var icon4 = $('<i class="fa-solid fa-clock-four"></i>')
    var icon5 = $('<i class="fa-solid fa-clock-five"></i>')

    icons = [
        {iconObject: icon9},
        {iconObject: icon10},
        {iconObject: icon11},
        {iconObject: icon12},
        {iconObject: icon1},
        {iconObject: icon2},
        {iconObject: icon3},
        {iconObject: icon4},
        {iconObject: icon5}
    ]

    // add icons
    for (i = 9; i < 18; i++) {
        timeBlockIcons.append(icons[i])
    }

    // save input on enter keypress event
    $(document).on('keypress', function(e) {
        if(e.which == 13) {
            save();
            window.alert("Event added!");
        }
    });

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