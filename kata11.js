const organizeInstructors = function(instructors) {
  // Put your solution here
  let courses = {};
  for (let instructor = 0; instructor < instructors.length; instructor++) {
    if (instructors[instructor].course in courses) {
      courses[instructors[instructor].course].push(instructors[instructor].name);
    } else {
      courses[instructors[instructor].course] = [instructors[instructor].name];
    }

  }

  return courses;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));