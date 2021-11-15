function fn() {
  var d = new Date();

  var date = parseInt(document.getElementById("day").value);
  var mm = parseInt(document.getElementById("month").value) - 1;
  var yyyy = parseInt(document.getElementById("year").value);
  //validating days
  if (day < 0 || day > 31) {
    document.getElementsByClassName("dayerror").innerHtml = "Enter valid Date";
    return false;
  } else if (date == "") {
    document.getElementsByClassName("dayerror").innerHtml =
      "This field cannot be empty";
    return false;
  } else {
    d.setDate(date);
  }
  //vallidating the month
  if (month < 0 || day > 12) {
    document.getElementsByClassName("montherror").innerHtml =
      "Enter Valid Month";
    return false;
  } else if (month == "") {
    document.getElementsByClassName("montherror").innerHtml =
      "This field cannot be empty";
    return false;
  } else {
    d.setMonth(month);
  }
  //validate year
  if (month < 0) {
    document.getElementsByClassName("yearerror").innerHtml = "Enter valid year";
    return false;
  } else if (month == "") {
    document.getElementsByClassName("yearerror").innerHtml =
      "This field cannot be empty";
    return false;
  } else {
    d.setYear(year);
  }

  var day = d.getDay();
  var day = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwo", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  function getAkan() {
    var ismale = document.getElementById("male").checked;
    var isfemale = document.getElementById("female").checked;
    if (ismale == true && isfemale == false) {
      if (day == 0) {
        //return male[0];
        alert("your name is " + male[0]);
      } else if (DD == 1) {
        alert("your name is " + male[1]);
      } else if (DD == 2) {
        alert("your name is " + male[2]);
      } else if (DD == 3) {
        alert("your name is " + male[3]);
      } else if (DD == 4) {
        alert("your name is " + male[4]);
      } else if (DD == 5) {
        alert("your name is " + male[5]);
      } else if (DD == 6) {
        alert("your name is " + male[6]);
      }
    } else if (ismale == false && isfemale == true) {
      if (day == 0) {
        //return male[0];
        alert("your name is " + female[o]);
      } else if (DD == 1) {
        alert("your name is " + female[1]);
      } else if (DD == 2) {
        alert("your name is " + female[2]);
      } else if (DD == 3) {
        alert("your name is " + female[3]);
      } else if (DD == 4) {
        alert("your name is " + female[4]);
      } else if (DD == 5) {
        alert("your name is " + female[5]);
      } else if (DD == 6) {
        alert("your name is " + female[6]);
      }
    }

  }


}
