const url = 'https://my-json-server.typicode.com/AshotAleqs/exams/expression';
let obj = {}
fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((example) => {
        console.log(example)
    })

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
            if(stack.pop()!== bracketIndex){
                return false
            }
        }
    }
    return stack.length === 0
}

checkDate(date2)