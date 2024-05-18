/*  1a  */

const ages = [3, 9 ,23, 64, 2, 8, 28, 98];

console.log(ages[ages.length - 1] - ages[0]);

/*  1b  */

ages.push(32);

console.log(ages[ages.length - 1] - ages[0]);

/*  1c  */

function averageAge(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(averageAge(ages));

/*  2a  */

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function averageLetters(array) {
    let letters = 0;
    for(let i = 0; i < array.length; i++) {
        letters += array[i].length;
    }
    return letters / array.length;
}

console.log(averageLetters(names));

/*  2b  */

function conCatNames(array) {
    for(let i = 0; i < array.length; i++) {
        array[i];
    }
    return console.log(array.join(' '));
}

conCatNames(names);

/*  3  */

console.log("By using 'array.length - 1'");

/*  4  */

console.log("By using 'array[0]'");

/*  5  */

const nameLengths = [];

function addLengths(array) {
    for(let i = 0; i < array.length; i++) {
        nameLengths.push(array[i].length);
    }
    return console.log(nameLengths);
}

addLengths(names);

/*  6  */

function sumOfLengths(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

console.log(sumOfLengths(nameLengths));

/*  7  */

function conCatWord(word, n) {
    let start = '';
    for(i = 0; i < n; i++) {
        start += word;
    }
    return console.log(start);
}

conCatWord('Hello', 3);

/*  8  */

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('John', 'Doe'));

/*  9  */

const numbers = [25, 30, 35, 40];

function addNumbers(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    } if (sum > 100) {
        return true
    } else {
        return false;
    }
}

console.log(addNumbers(numbers));

/*  10  */

function averageNumbers(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(averageNumbers(numbers));

/*  11  */

const numbers1 = [2, 4, 6, 8, 10, 12];
const numbers2 = [2, 4, 6, 8, 10];

function addingTwoArrays(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    for(let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    } if ((sum1 / array1.length) > (sum2 / array2.length)) {
        return true;
    } else {
        return false;
    }
}

console.log(addingTwoArrays(numbers1, numbers2));

/*  12  */

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 10.51));

/*  13  */

//  This function is going to be used to find the surface are of a triangular prism.


/*  For this problem we are going to know the dimensions of the following:

        - Side 1
        - Side 2
        - Base
        - Length

    For this problem we DO NOT know the Height.
    The Equation to figure out the height is built into the function.



/*           _____________________              ___
            /\                    \              |
           /  \                    \             |
     Side1/    \Side2               \            | Height
         /      \                    \           |
        /________\ ___________________\         _|_
           Base           Length





    --Explainging the Equation--

    Total Surface Area of Triangular Prism = ((Perimeter of the base) x (Length fo the prism)) + (2 x (Base Area))

    --The simpified equaiton--

    Total Surface Area of Triangular Prism = (S1 + S2 + B)L + BH

*/

 areaOfPrism = (s1, s2, b, l) => {
    let h = Math.sqrt((s1 ** 2) - ((b / 2) ** 2));

    return ((s1 + s2 + b) * l) + (b * h);
}

console.log(areaOfPrism(5, 5, 3, 10));