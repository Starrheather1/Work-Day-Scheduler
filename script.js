displayTime = function () {
  $('#currentDay').text(dayjs().format('dddd MMM D, YYYY h:mm a'));
}

$(document).ready(function () {
  displayTime()
  setInterval(displayTime, 1000)



  $('.saveBtn').on("click", function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
    console.log(time, text);
  });

  $('.time-block').each(function (index, element) {
    var blockTime = ($(this).attr('id').split('-')[1])
    var currentTime = dayjs().hour()
    console.log(currentTime, blockTime)
    if (currentTime == blockTime) {
      $(this).addClass('present')
    }
    else if (currentTime > blockTime) {
      $(this).addClass('past')
    }
    else if (currentTime < blockTime) {
      $(this).addClass('future')
    }
  })
 
 
  for (let i = 9; i < 19; i++) {
    var thisHour = $('#hour-'+i)
    console.log(thisHour)
    var thisNote = localStorage.getItem('hour-'+i)
    console.log(thisNote)
    thisHour.children('textarea').text(thisNote);

  };

})