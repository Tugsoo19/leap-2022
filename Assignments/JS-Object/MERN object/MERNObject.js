// // --------MERN object

const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

// Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.

console.log(users[0]);

// Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.

function mostSkilled(array) {
  let max = -1;
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i].skills.length) {
      max = array[i].skills.length;
    }
  }
  return max;
}

console.log(mostSkilled(users));

// Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.

function loggedPerson(array) {
  for (let i = 0; i < array.length; i++) {
    let logged = array[i].isLoggedIn;
    let points = array[i].points;
    if (logged == true && points >= 50) {
      console.log(logged);
    }
  }
}

loggedPerson(users);

// Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.

function mern(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].skills.length; j++) {
      let skill = array[i].skills;
      if (
        skill[j] == "MongoDB" ||
        skill[j] == "Express" ||
        skill[j] == "React" ||
        skill[j] == "Node"
      ) {
        console.log(array[i].name + " " + skill[j]);
      }
    }
  }
}

mern(users);

// Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх


function ages(array) {
  for (let i = 0; i < array.length; i++) {
    let arr = array[i].age;
    // console.log(arr);

    third = first = second = 0;

    if (myObject > first) {
      third = second;
      second = first;
      first = myObject;
    } else if (myObject > second) {
      third = second;
      second = myObject;
    } else if (myObject > third) {
      third = myObject;
    }
  }
  console.log("Oldest 3 ages are " + first + " " + second + " " + third);
}

ages(users);

