const btn = document.getElementById('btn');
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let i = 777;
btn.addEventListener('click', function showArr() {
    let [, ...arg] = arr;
    arr = arg;
    let addArr = [...arr, i];
    i += 1;
    arr = addArr;
    console.log(arr);
})