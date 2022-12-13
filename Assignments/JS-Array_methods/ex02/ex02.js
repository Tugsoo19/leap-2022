//ex02 -

let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] 

array.sort();
console.log('array:',array);

const reversed = array.reverse();
console.log('reversed:', reversed);

const first = array.shift();
console.log(array)

let l = array.length/2

if (array.length % 2 == 0) { 
    
    array.splice(l-1,2)
} else {
    array.splice(l,1)
}
console.log(array)

const last = array.pop()
console.log(array)

const remove = array.splice(0,array.length)
console.log(array)
