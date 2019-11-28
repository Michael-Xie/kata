let talkingCalendar = function(date) {
  // Your code here
  let dateArray = date.split("/");
  const monthMapping = {
    "01": "January", "02": "February", "03": "March", "04": "April",
    "05": "May", "06": "June", "07": "July", "08": "August",
    "09": "September", "10": "October", "11": "November", "12": "December"
  };
  const specialDay = {
    1: "1st", 2: "2nd", 3: "3rd", 21: "21st", 22: "22nd", 23: "23rd", 31: "31st"
  };

  let year = dateArray[0];
  let month = monthMapping[dateArray[1]];
  let day = parseInt(dateArray[2], 10);
  day = specialDay[day] ? specialDay[day] : day + "th";

  return month + " " + day + ", " + year;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));