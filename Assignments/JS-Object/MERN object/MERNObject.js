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
    if (
      array[i].skills.includes("MongoDB") &&
      array[i].skills.includes("Express") &&
      array[i].skills.includes("React") &&
      array[i].skills.includes("Node")
    ) {
      console.log("MERN devop:" + array[i].name);
    }
  }
}
mern(users);

// Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх

function ages(array) {
  for (let i = 0; i < array[i].age.length; i++) {
    let arr = array.age;
    // console.log(arr);

    third = first = second = 0;

    if (arr > first) {
      third = second;
      second = first;
      first = arr;
    } else if (arr > second) {
      third = second;
      second = arr;
    } else if (arr > third) {
      third = arr;
    }
    console.log("Oldest 3 ages are " + first + " " + second + " " + third);
  }
}

ages(users);
