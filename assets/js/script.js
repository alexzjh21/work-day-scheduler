// Display the date with Luxon 
var options = {weekday: "long", month: "long", day: "numeric"};
var dt = new Date();
var displayDate= dt.toLocaleDateString("en-US", options);
$("#currentDay").append(displayDate)

var getTime = ()=> {
    //get time
    var currentTime = new Date().getHours();

    //loop through time block
    $(".time-slot").each(function() {
 
        var timeBlock = parseInt($(this).attr("id"));

        if (currentTime === timeBlock) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } 
        
        else if (currentTime < timeBlock) {
            $(this).addClass("future");
            $(this).removeClass("past present")
        }

        else {
            $(this).addClass("past");
            $(this).removeClass("present future");
        }
    })

}

var onStart = ()=> {
    getTime();
 
    $(".saveBtn").on("click", function(){

        var text = $(this).siblings(".event").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text); 
           
    })

    //returns value of the localStorage item
    $("#nine .event").val(localStorage.getItem("nine"));
    $("#ten .event").val(localStorage.getItem("ten"));
    $("#eleven .event").val(localStorage.getItem("eleven"));
    $("#twelve .event").val(localStorage.getItem("twelve"));
    $("#one .event").val(localStorage.getItem("one"));
    $("#two .event").val(localStorage.getItem("two"));
    $("#three .event").val(localStorage.getItem("three"));
    $("#four .event").val(localStorage.getItem("four"));
    $("#five .event").val(localStorage.getItem("five"));

}

onStart();