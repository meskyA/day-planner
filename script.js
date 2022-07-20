const store = window.localStorage;

const container = $(".container");

const now = moment();


// Set current date.
$("#currentDay").text(now.format("dddd MMMM DD, YYYY"));

var currentHour = moment().hour();
      
        
 console.log(currentHour);

var currentTime = moment();
        currentTime = currentTime.startOf("hour");