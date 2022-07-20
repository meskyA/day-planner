const store = window.localStorage;

const container = $(".container");

const now = moment();

$("#currentDay").text(now.format("dddd MMMM DD, YYYY"));

// color code time blocks for past, present and future

function timeBlockColor() {
        var hour = moment().hour();

        $(".time-block").each(function() {
                var currentTime = parseInt($(this).attr("id"));

                if(currentTime  > hour){
                        $(this).addClass("future").css("background-color", "green");
                } else if(currentTime === hour) {
                        $(this).addClass("present").css("background-color", "red");
                } else {
                        $(this).addClass("past").css("background-color","gray");
                }                       
               
        })
};
