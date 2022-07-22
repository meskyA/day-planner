const store = window.localStorage;

const container = $(".container");

const now = moment();
 
$("#currentDay").text(now.format("dddd MMMM DD, YYYY"));

// color code time blocks for past, present and future

function timeBlockColor() {
       
        var timeNow = moment().hours();

        $(".time-block").each(function() {
                var blockTime = parseInt($(this).attr("id").split("hour")[1]); 

                if(blockTime > timeNow){
                        // console.log('future');
                        $(this).removeClass('past');
                        $(this).removeClass('present');
                        $(this).addClass("future");
                } else if(blockTime === timeNow) {
                        // console.log('present');
                        $(this).removeClass('past');
                        $(this).removeClass("future");
                        $(this).addClass('present');
                        // console.log 'past'
                } else {
                        $(this).removeClass("present"); 
                         $(this).removeClass("future"); 
                        $(this).addClass("past");
                }
        })
};

// save event entries
$(document).ready(function() {
        $(".btn").on("click", function() {
                var text = $(this).siblings(".form").val();
                var time = $(this).parent().attr("id");
                console.log('saving local storage', time, text)
                localStorage.setItem(time, text);
                console.log(localStorage.getItem(time))
        })
        
})

$("#hour9 .form").val(localStorage.getItem("hour9"));
$("#hour10 .form").val(localStorage.getItem("hour10"));
$("#hour11 .form").val(localStorage.getItem("hour11"));
$("#hour12 .form").val(localStorage.getItem("hour12"));
$("#hour13 .form").val(localStorage.getItem("hour13"));
$("#hour14 .form").val(localStorage.getItem("hour14"));
$("#hour15 .form").val(localStorage.getItem("hour15"));
$("#hour16 .form").val(localStorage.getItem("hour16"));
$("#hour17 .form").val(localStorage.getItem("hour17"));

timeBlockColor();
