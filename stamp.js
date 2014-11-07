var stamp = (function() {

  function weekday(d) {
    var day = d.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  }
  function weekday_a(d) {
    var day = d.getDay();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function month(d) {
    var month = d.getMonth();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[month];
  }
  function month_a(d) {
    var month = d.getMonth();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months[month];
  }
  function ordinal(d) {
    var i = d.getDate(),
        j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }
  function time(d) {
    var timestring = timebuild(d);
    timestring += ampm(d);
    return timestring;
  }
  function timebuild(d) {
    var hrs = d.getHours(),
        mins = d.getMinutes();
    var timestring =  ((hrs < 10)?"0":"") + ((hrs>12)?(hrs-12):hrs) + ":"; // hours
    timestring += ((mins < 10)?"0":"") + mins; // minutes
    return timestring;
  }
  function time_sec(d) {
    var sec = d.getSeconds();
    var timestring = timebuild(d);
    timestring += ":" + ((sec < 10?"0":"")+sec);
    return timestring;
  }
  function ampm(d) {
    var hrs = d.getHours();
    var ampm = ((hrs>12)?('pm'):'am'); // pm
    return ampm;
  }
  function date(d) {
    return d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
  }

  return {
    weekday: weekday,
    weekday_a: weekday_a,
    month: month,
    month_a: month_a,
    ordinal: ordinal,
    time: time,
    time_sec: time_sec,
    date: date
  }
})();