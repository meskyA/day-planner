const store = window.localStorage;

const container = $(".container");

const now = moment();
 
$("#currentDay").text(now.format("dddd MMMM DD, YYYY"));

// color code time blocks for past, present and future

function timeBlockColor() {
       
        var timeNow = moment().hour();

        $(".time-block").each(function() {
                var blocktime = parseInt($(this).attr("id"));

                if(blocktime > timeNow){
                        $(this).addClass("future");
                } else if(blocktime === timeNow) {
                        $(this).addClass("present");
                } else {
                        $(this).addClass("past");
                }                       
               
        })
}

// save event entries
$(document).ready(function() {
        $(".btn").on("click", function() {
                var text = $(this).siblings(".form").val();
                var time = $(this).parent(attr("id"));

                localStorage.setItem(time, text);
        })

        
})

$("#9 .form").val(localStorage.getItem("9"));
$("10 .form").val(localStorage.getItem("10"));
$("11 .form").val(localStorage.getItem("11"));
$("12 .form").val(localStorage.getItem("12"));
$("13 .form").val(localStorage.getItem("13"));
$("#14 .form").val(localStorage.getItem("14"));
$("#15 .form").val(localStorage.getItem("15"));
$("#16 .form").val(localStorage.getItem("16"));
$("#17 .form").val(localStorage.getItem("17"));

timeBlockColor();
