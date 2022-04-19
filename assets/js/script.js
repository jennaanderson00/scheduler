// CRITERIA
// current day displays at the top of calendar
// standard business hours time blocks
// blocks are color-coded for past, present, and future
// can enter events on time blocks
// can save events in localStorage and give alert
// saved events persist

// BUGS
// appending icons in an if/else
// how to target individual time blocks??

// display on DOM load
$(function() {
   // moment.js
   var currHour = moment().hour();
   console.log(currHour);
   var currDate = moment().toDate();
   console.log(currDate);
   var currDay = moment().day();
   console.log(currDay);

   // display weekday
   if (currDay == 0) {
       $("#currentWeekday").html("sunday, ");
   } else if (currDay == 1) {
        $("#currentWeekday").html("monday, ");
   } else if (currDay == 2) {
        $("#currentWeekday").html("tuesday, ");
   } else if (currDay == 3) {
        $("#currentWeekday").html("wednesday, ");
   } else if (currDay == 4) {
        $("#currentWeekday").html("thursday, ");
   } else if (currDay == 5) {
        $("#currentWeekday").html("friday, ");
   } else {
        $("#currentWeekday").html("saturday, ");
   } 

   window.setInterval(function () {
        $("#currentDay").html(moment().format("MM/DD/YYYY H:mm"))
   }, 1000);

   function eventSaved() {
        window.alert("your event has been added!");
   }

   // variables storing User input
   var event2Input = $("#block2Input").val();
   var event3Input = $("#block3Input").val();
   var event4Input = $("#block4Input").val();
   var event5Input = $("#block5Input").val();
   var event6Input = $("#block6Input").val();
   var event7Input = $("#block7Input").val();
   var event8Input = $("#block8Input").val();

   // pass User input into HTML and save to localStorage
   $("#btnBlock1").on("submit", function () {
     var event1Input = $(this).siblings("#block1Input").val();
     $("#events1").html(event1Input);
     console.log(event1Input);
     localStorage.setItem("event1Input", JSON.stringify(event1Input));
     eventSaved();
   });
   $("#btnBlock2").on("submit", function () {
     $("#events2").html(event2Input);
     localStorage.setItem("event2Input", JSON.stringify(event2Input));
     eventSaved();
   });
   $("#btnBlock3").on("submit", function () {
     $("#events3").html(event3Input);
     localStorage.setItem("event3Input", JSON.stringify(event3Input));
     eventSaved();
   });
   $("#btnBlock4").on("submit", function () {
     $("#events4").html(event4Input);
     localStorage.setItem("event4Input", JSON.stringify(event4Input));
     eventSaved();
   });
   $("#btnBlock5").on("submit", function () {
     $("#events5").html(event5Input);
     localStorage.setItem("event5Input", JSON.stringify(event5Input));
     eventSaved();
   });
   $("#btnBlock6").on("submit", function () {
     $("#events6").html(event6Input);
     localStorage.setItem("event6Input", JSON.stringify(event6Input));
     eventSaved();
   });
   $("#btnBlock7").on("submit", function () {
     $("#events7").html(event7Input);
     localStorage.setItem("event7Input", JSON.stringify(event7Input));
     eventSaved();
   });
   $("#btnBlock8").on("submit", function () {
     $("#events8").html(event8Input);
     localStorage.setItem("event8Input", JSON.stringify(event8Input));
     eventSaved();
   });

   // retrieve User input on page load
   $("#events1").append(JSON.parse(localStorage.getItem("event1Input")));
   $("#events2").append(JSON.parse(localStorage.getItem("event2Input")));
   $("#events3").append(JSON.parse(localStorage.getItem("event3Input")));
   $("#events4").append(JSON.parse(localStorage.getItem("event4Input")));
   $("#events5").append(JSON.parse(localStorage.getItem("event5Input")));
   $("#events6").append(JSON.parse(localStorage.getItem("event6Input")));
   $("#events7").append(JSON.parse(localStorage.getItem("event7Input")));
   $("#events8").append(JSON.parse(localStorage.getItem("event8Input")));
   
   // past/present/future colors
    if (currHour < 9) {
        $("#block1").addClass("future");
        $("#block2").addClass("future");
        $("#block3").addClass("future");
        $("#block4").addClass("future");
        $("#block5").addClass("future");
        $("#block6").addClass("future");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
    } else if (currHour == 9) {
        $("#block1").addClass("present");
        $("#block2").addClass("future");
        $("#block3").addClass("future");
        $("#block4").addClass("future");
        $("#block5").addClass("future");
        $("#block6").addClass("future");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
   } else if (currHour == 10) {
        $("#block1").addClass("past");
        $("#block2").addClass("present");
        $("#block3").addClass("future");
        $("#block4").addClass("future");
        $("#block5").addClass("future");
        $("#block6").addClass("future");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
   } else if (currHour == 11) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("present");
        $("#block4").addClass("future");
        $("#block5").addClass("future");
        $("#block6").addClass("future");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
   } else if (currHour == 12) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("past");
        $("#block4").addClass("present");
        $("#block5").addClass("future");
        $("#block6").addClass("future");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
   } else if (currHour == 13) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("past");
        $("#block4").addClass("past");
        $("#block5").addClass("present");
        $("#block6").addClass("future");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
   } else if (currHour == 14) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("past");
        $("#block4").addClass("past");
        $("#block5").addClass("past");
        $("#block6").addClass("present");
        $("#block7").addClass("future");
        $("#block8").addClass("future");
   } else if (currHour == 15) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("past");
        $("#block4").addClass("past");
        $("#block5").addClass("past");
        $("#block6").addClass("past");
        $("#block7").addClass("present");
        $("#block8").addClass("future");
   } else if (currHour == 16) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("past");
        $("#block4").addClass("past");
        $("#block5").addClass("past");
        $("#block6").addClass("past");
        $("#block7").addClass("past");
        $("#block8").addClass("present");
   } else if (currHour >= 17 && currHour <= 24) {
        $("#block1").addClass("past");
        $("#block2").addClass("past");
        $("#block3").addClass("past");
        $("#block4").addClass("past");
        $("#block5").addClass("past");
        $("#block6").addClass("past");
        $("#block7").addClass("past");
        $("#block8").addClass("past");
   } 
})
