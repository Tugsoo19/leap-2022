// // --------MERN object

// const users = [
//   {
//     name: "Alex",
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 45,
//     isLoggedIn: false,
//     points: 30,
//   },
//   {
//     name: "Job",
//     email: "job@job.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   {
//     name: "Brook",
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 39,
//     isLoggedIn: true,
//     points: 50,
//   },
//   {
//     name: "Daniel",
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 25,
//     isLoggedIn: false,
//     points: 40,
//   },
//   {
//     name: "John",
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   {
//     name: "Thomas",
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 18,
//     isLoggedIn: false,
//     points: 40,
//   },
//   {
//     name: "Paul",
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 40,
//   },
// ];

// // Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.

// // console.log(users[0])

// // Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.

// highestSkill(users);

// // function highestSkill(array[i]) {
// //   for (let i = 0; i < array.length; i++) {
// //     let arraylist = array[i].skills.length;
    
// //     for (let j = 0; j < arraylist[i].skills.length; j++) {
// //       let max;
// //       if (arraylist[j] > max) {

// //         max = arraylist[j];
// //       }
// //     } 
// //     console.log(max);
// //   }
// // }


// function highestSkill(array){
//   let max = -1;
//   for(let i = 0; i < array.length; i++){
//       if(max <= array[i].skills.length){
//           max = array[i].skills.length;
//       }
//   }
//   return max;
// }
// console.log(highestSkill(users));

// // Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.
// // Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.
// // Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх


//MERN Object
console.log("------------mern object--------------");

function mostSkilled(array){
    let max = -1;
    for(let i = 0; i < array.length; i++){
        if(max <= array[i].skills.length){
            max = array[i].skills.length;
        }
    }
    return max;
}

let mern = function(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].skills.length; j++){
            if(array[i].skills[j] == "MongoDB" || array[i].skills[j] == "Express" || array[i].skills[j] == "React" || array[i].skills[j] == "Node"){
                console.log(`${array[i].uName} ${array[i].skills}`);
            }
        }
    }
}

let older = (array) => {
    for(let i = 0; i < array.length; i++){

    }
} 

const users = [
    {
        uName: "Alex",
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JS", "Python"],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
    {
        uName: "John",
        email: "john@john.com",
        skills: ["HTML", "CSS", "JS", "React", "Redux", "Node"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    {
        uName: "Thomas",
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JS", "React"],
        age: 18,
        isLoggedIn: false,
        points: 40,
    },
    {
        uName: "Pual",
        email: "pual@pual.com",
        skills: ["HTML", "CSS", "JS", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
]
console.log(users[1]);
console.log(mostSkilled(users));
mern(users);