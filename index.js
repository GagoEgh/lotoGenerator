const url = 'https://my-json-server.typicode.com/AshotAleqs/exams/expression';
let obj = {}
fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((example) => {
        console.log(example)
    })

//1.  expression
let date1 = '(){}}[]';
let date2 = '((){}[])';

function checkDate(date) {
    let brackets = "[]{}()"
    let stack = []
    for (let i = 0; i < date.length; i++) {
        let bracketIndex = brackets.indexOf(date[i]);
        if (bracketIndex % 2 === 0) {
            stack.push(bracketIndex + 1);
        } else {
            if (stack.pop() !== bracketIndex) {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(checkDate('({})'));


//2 random calculation
numbers = [2, 3, 4, 5, -6, 9, 3,];

function myMath(numbers) {
    let mathOperators = ['+', '-', '/', '*'];
    let res = 0;
    let count = mathOperators.length;

    for (let i = 0; i < numbers.length - 1; i++) {

        if (numbers[i] < 0) {
            let index = (i % count) - 2;
            if (i % count === 0) {
                index = 2
            }

            let tmp;
            tmp = mathOperators[index];
            mathOperators[index] = mathOperators[i % count];
            mathOperators[i % count] = tmp;

        }

        if (mathOperators[i % count] === '+') {
            res = numbers[i] + numbers[i + 1];

        } else if (mathOperators[i % count] === '-') {
            res = res - numbers[i + 1];

        } else if (mathOperators[i % count] === '*') {
            res = res * numbers[i + 1];

        } else if (mathOperators[i % count] === '/') {
            res = res / numbers[i + 1];
        }

        console.log(res);

    }
}

console.log(numbers);
myMath(numbers)

//3 flatten
function myFlatten() {
    let result = [];
    return function pushDate(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                pushDate(arr[i]);
            } else {
                result.push(arr[i]);

            }
        }
        return result
    }
}

let arr = [3, 4, [33, 44, [9, 8]], [45, 43]];
let flat = myFlatten();
console.log(flat(arr))

