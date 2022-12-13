
let a = [4, 2, 7, 10, 8, 15, 21]

// hervee elementiin urt tegsh bol elementiin tegsh utgiig hevleh, urt sondgoi bol sondgoi elementiig hevleh

if (a.length % 2 == 0) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            console.log(a[i]);
        }
    }

} else {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 1) {
            console.log(a[i]);
        }
    }

}

// herev element ni tegsh bol dugaariig (index) hevleh

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        console.log(i);
    }
}

// elementiin toogoor '1' hevleh

// 1111
// 11
// 1111111 ...

let k = ''
for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < a[j]; i++) {
        k += '1'
    }
    k += '\n';
}

console.log(k);


// elementiin toogoor elementiig hevleh

let k1 = ''
for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < a[j]; i++) {
        k1 += a[j]
    }
    k1 += '\n';
}

console.log(k1);

// elementiin toogoor hevlehdee herev ter element ni tegsh bval 2 gj hevleh, 
// sondgoi bval 1 gj hevleh

let k2 = ''
for (let j = 0; j < a.length; j++) {
    if (a[j] % 2 == 0) {
        for (let i = 0; i < a[j]; i++) {
            k2 += '2'
            k2 += ' '
        }
        k2 += '\n';
    } else {
        for (let i = 0; i < a[j]; i++) {
            k2 += a[j]
            k2 += ' '
        }
        k2 += '\n';
    }
}
console.log(k2);

// garaas oruulsan toog ugeer hurvuuleh 

// hervee a[] == 2 hevle 2 

let n = '4532';

for (let i = 0; i < n.length; i++) {
    if (n[i] == 1) console.log('neg');
    if (n[i] == 2) console.log('hoyor');
    if (n[i] == 3) console.log('gurav');
    if (n[i] == 4) console.log('duruv');
    if (n[i] == 5) console.log('tav');
    if (n[i] == 6) console.log('zurgaa');
    if (n[i] == 7) console.log('doloo');
    if (n[i] == 8) console.log('naim');
    if (n[i] == 9) console.log('ys');
}

// toog 3 3 salgaj haruulah 
let n1 = '4552';
let result = '';

let k3 = '';

for (let i = 0; i < k.length; i++) {
   k3 += n[i]
}
console.log(k3);

for (let i = 0; i < k3.length; i++)
{
    result += k[i];
    if ( i % 3 == 2) result += ' '
}


console.log(result);

let final = ' '
for (let i = result.length-1 ; i >=0 ; i--) {
    final += result[i];
}

console.log(final);
