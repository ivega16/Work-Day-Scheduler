//localStorage.setItem()

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let currentDayEl = $('#currentDay');
  let currentDayTime= dayjs().format('dddd, MMMM D');

  console.log(currentDayTime);
  currentDayEl.text(currentDayTime);
  let saveBtn = $('.saveBtn'); //JS - grabs all buttons - document.querySelectorAll('.saveBtn');

//current hour is in military time (24hr period)
  let currentHour = dayjs().hour(); //numeric value needs to be compared with i in loop

  console.log(currentHour);

// `this is the first ${foods[0].currentHour.whatever} continue our sentence` =  "this is the first 9"

  //right now only up to 13. turn into 17 once more hours are added
  //1. create loop to get all the time block ids, starting from 9am
  //2. compare the i  with curent hour

  for(let i = 9; i <= 17; i++) {
     let event = localStorage.getItem('hour-' + i);
     
    //  let event = localStorage.getItem(${parentId[i].currentHour});

    // JSON.parse(localStorage.getItem("parentId"));

     console.log(event); //next put text in textarea
     


    let timeBlock = $('#hour-' + i)
    timeBlock.children('textArea').text(localStorage.getItem('hour-' + i));
    
    //we want to target past in class
    if(i === currentHour) {
        timeBlock.addClass('present');
    }
    else if (i < currentHour) {
      timeBlock.addClass('past');

    }
    else {
      timeBlock.addClass('future');
    }

  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  
  function saveEvent(event) { //can use event or this aka current element selector
    let currentButton = $(event.target); //currentbutton selected
    let textArea = currentButton.siblings('textarea'); //looks at textarea sibling
    let parentId =currentButton.parent().attr('id')

    let myText = {
      text: JSON.stringify(textArea.val())
    };

    alert(textArea.val() + ' ' + parentId); //to get value of textArea

    localStorage.setItem(parentId, textArea.val());
    console.log(localStorage);
    
    // JSON.stringify(textArea.val()); //set all values to a string

  }
  
  
  saveBtn.on('click', saveEvent);

});
