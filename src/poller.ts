import * as moment from 'moment';
import * as SP from './datatypes';

export function clockPoll() {
  $('#time').text(moment().format('HH:mm:ss'));
  setTimeout(clockPoll, 1000); // 1 second polling
}

export function calendarPoll() {
  // Get SP Academic Calendar and read from JSON
  console.log("[DEBUG]: Calendar Poll called");
  var request = new XMLHttpRequest();
  request.onloadend = function () {
    if (this.status == 200) {
      // Get all objects 
      let allCalendarEntries: SP.CalendarEntry[] = JSON.parse(this.responseText);
      let relevantEntries: SP.CalendarEntry[] = [];
      for (var i = 0; i < allCalendarEntries.length; i++) {
        let startDate = Date.parse(allCalendarEntries[i].startTime);
        let endDate = Date.parse(allCalendarEntries[i].endTime);
        let currentDate = Date.now();
        if (currentDate > startDate && currentDate < endDate) {
          relevantEntries.push(allCalendarEntries[i]);
        }
      }

      // Set status
      if (relevantEntries.length > 0) {
        let schoolStateString: string = "";
        relevantEntries.forEach(element => {
          schoolStateString += ", ";
          schoolStateString += element.summary;
        });
        schoolStateString = schoolStateString.substr(2, schoolStateString.length);   // Remove the first 2 characters
        $('#currentStatus').text(schoolStateString);
      } else {
        $('#currentStatus').text("No School Events");
      }
    }

    // Repeat request once it is loaded or unsuccessfully loaded
    console.log("[DEBUG]: Loaded SP Calendar");
    setTimeout(calendarPoll, 1000 * 60 * 5); // 5 min polling
  };
  request.open("GET", "https://mobileapps.sp.edu.sg/SPMobileAPI/api/GetAcadCalendar", true);
  request.send();
}