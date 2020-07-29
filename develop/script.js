$(document).ready(function() {
  // listen for save button clicks

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    

    console.log('value:', value);
    console.log('time:', time);

    // save the value in localStorage as time
    localStorage.setItem(time, value);
  });
  
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      console.log("block hour:", blockHour);
      
      // if the current hour is greater than the block hour
      // then add class "past"
      if (currentHour > blockHour){
        $(this).addClass("past");
        // Adding console.log to check "past"
        console.log("past");
      }
      // if they are equal
      // then remove class "past" and add class "present"
      if (currentHour === blockHour){
        $(this).addClass("present");
        $(this).removeClass("past");
        // Adding console.log to check "present"
        console.log("present");
      }

      // if current hour is less than block hour
      // remove class "past", remove class "present", add class "future"
      if (currentHour < blockHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
         // Adding console.log to check "future"
        console.log("future");
      }
    });
  };

  hourUpdater();

  
  // set up interval to execute hourUpdater function every 15 seconds
  function updateTime(){
    myTime = setInterval(hourUpdater,15000);
  }
  updateTime();

  // load any saved data from localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  
  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

});

  