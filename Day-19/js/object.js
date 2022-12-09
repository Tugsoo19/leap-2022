console.log('lesson Objects');

let rabbit1 = {
    color: 'White',
    rName: 'Bunny',
    gender: 'male',
    age: 3,
    jump: function(){
        console.log("Sorry, I broke my leg. I can't jump");
    },
    sayMyName: function(myName){
        console.log(`Your name is ${myName}`);
    }
    
}

console.log(rabbit1);
console.log((rabbit1.color));
rabbit1.color = 'Gray'
console.log(rabbit1);
rabbit1.jump()
rabbit1.sayMyName("Tugsoo")


let rabbit2 = {
    color: 'Brown',
    rName: 'Flower',
    gender: 'Female',
    age: 2,
    jump: function(){
        console.log("I can jump");
    }
}

console.log("Here is rabbit 2 speaks");
console.log(rabbit2);


let rabbits = [rabbit1,rabbit2]
console.log(rabbits);
rabbit2.jump()


// day-19 

console.log('day19: object and methods')

let teacherDolgor = {
    firstName: 'Dolgor',
    lastName: 'Dondog',
    age: 35,
    experience: 10,
    children: [],
    isMarried: true,
    address: {
        district: 'BDG',
        khoroolol: '2-r',
        khoroo: '1-r',
        houseNumber: '016',
        doorNumber: '4',
    },
    GPA: 94.5,

    introduction: function(){
        console.log(`My name is ${this.lastName}-iin ${this.firstName}. 
        I'm ${this.age} years old. I have ${this.experience} years work experience. 
        I live ${this.address.district}`) ;
    }
}

teacherDolgor.introduction();

let teacherDolgorClone = teacherDolgor;

teacherDolgorClone.firstName = 'Dolgor Clone';

console.log(teacherDolgor.firstName);
console.log(teacherDolgorClone.firstName);

let teacherDolgorRealClone = {... teacherDolgor};
teacherDolgorRealClone.firstName = 'Dolgor Real Clone';
console.log(teacherDolgorRealClone.firstName);
console.log(teacherDolgor.firstName);

console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));

// let neeTeacher = Object.create(Object.prototype)

// console.log(Object.create(teacherDolgor));

