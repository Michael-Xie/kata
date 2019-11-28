const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestName = instructors[0].name;
  let course = instructors[0].course;

  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name;
      course = instructors[i].course;
    }

  }
  return { name: longestName, course: course };
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));