// function lotto() {

//     let arr = [];
//     for (let i = 0; i < 90; i++) {
//         arr.push(i);
//     }

//     return function randomNum() { 
//        let ran = Math.floor(Math.random() * (arr.length - 1));
//        let i =  arr.splice(ran, 1);
//        return i[0]
//     }
// }

// let lottoStart = lotto();


// for(let i = 0; i< 90; i++){
//     console.log(lottoStart());
// }



function* lotto() {
    let arr = [];
    for (let i = 1; i < 90; i++) {
        arr.push(i);
    }

    for (let j = 1; j < arr.length; j++) {
        let ran = Math.floor(Math.random() * (arr.length - 1));
        let i = arr.splice(ran, 1);
        yield i[0]
    }
}

for (let value of lotto()) {
    console.log(value)
}