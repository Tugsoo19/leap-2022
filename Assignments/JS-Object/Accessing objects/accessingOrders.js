let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих 

findMaleFemaleNum(students)

function findMaleFemaleNum(array){
    for (let i = 0; i < array.length; i++){
        if(array[i].gender == 'female'){
            console.log(array[i].name + ' - ' + array[i].gender);
        } else {
            console.log(array[i].name + ' - ' + array[i].gender);
        }
    }
}


// Сурагчдын насны дунджийг олох функц бичих

findAvgAge(students)

function findAvgAge(array,i){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i].age
        
    } 
    console.log(`Average age is ${sum/array.length}`)
}

//  Сурагчидад овог нэмж оруулах 

addLastname(students)

function addLastname(array){
    for(let i = 0; i < array.length; i++){
       let j = 0
       let a = 0
        for(let j = 0; j <= i; j++){
            let j = ['Dorj' , 'Bat' , 'Lkhagva', 'Od', 'Naraa']
            array[i].Lastname = j.at(a)
            a = a + 1
        }
    }
    console.log(array);
}

// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх  

// objectEqual(students)

// function objectEqual(array,i){
//     let compare = array[i].age
//         console.log(compare)
//     for(let i = 0; i < array.length; i++){
//         compare === array[i].age;
//         i += 1
//         console.log(compare)
//     }
    
//     // console.log(array[i].age);
    
// }



// newarray = {...students}

// newarray.age = 10
// console.log(newarray)



var values = [
    { name: 'someName1' },
    { name: 'someName2' },
    { name: 'someName4' },
    { name: 'someName2' }
];

var valueArr = values.map(function(item){ return item.name });
var isDuplicate = valueArr.some(function(item, idx){ 
    return valueArr.indexOf(item) != idx 
    
});
console.log(isDuplicate);

