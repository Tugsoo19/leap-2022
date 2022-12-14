let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих

findMaleFemaleNum(students);

function findMaleFemaleNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].gender == "female") {
      console.log(array[i].name + " - " + array[i].gender);
    } else {
      console.log(array[i].name + " - " + array[i].gender);
    }
  }
}

// Сурагчдын насны дунджийг олох функц бичих

findAvgAge(students);

function findAvgAge(array, i) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }
  console.log(`Average age is ${sum / array.length}`);
}

//  Сурагчидад овог нэмж оруулах

addLastname(students);

function addLastname(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      let a = ["Dorj", "Bat", "Lkhagva", "Od", "Naraa"];
      array[i].Lastname = a[j];
      a = a + 1;
    }
  }
  console.log(array);
}

// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх

objectEqual(students);

function objectEqual(array) {
  let sameAge = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].age == array[j].age) {
        x = array[i];
        y = array[j];
        console.log(`${x.name} is same age with  ${y.name}`);
      }
    }
    if (!sameAge.includes(x)) {
      sameAge.push(x);
    }

    if (!sameAge.includes(y)) {
      sameAge.push(y);
    }
  }

}
