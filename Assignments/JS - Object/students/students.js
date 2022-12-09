function findOlderStudnets(array){
    for (let i= 0; i< array.length; i++){
        if (2022 - array[i].birthYear > 20 ){
            console.log(array[i].name);
        }   
    } 
}

function findOutAges(array){
    for (let i= 0; i< array.length; i++){
    let age = 2022 - array[i].birthYear;
    console.log(age);
    }
}

function findSingles(array) {
    for (let i = 0; i <array.length; i++){
        if( array[i].single == true){
            console.log(array[i].name);
        }
    }
}


const students =[
    {
        name: 'khangai',
        birthYear: 1982,
        hobby: 'karate',
        single: false
    },
    {
        name: 'dolgor',
        birthYear: 2004,
        hobby: 'cycling',
        single: true
    },
    {
        name: 'margad',
        birthYear: 1996,
        hobby: 'yoga',
        single: false
    },
]

findOlderStudnets(students) //
findOutAges(students)
findSingles(students)
