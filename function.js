//declaration func
/*function test () {
    return console.log('hasil return')
    console.log('gak akan jalan');
}
test();
*/

//expression func

// const test = () => {
//     return console.log('berhasil testing !');
// }
// test();
// test();
// test();

const sum = (param) => {
    // console.log(param1); //1
    // console.log(param2); //2
    // console.log(param.param1); //2
    // console.log(param.param1); //1
    let penj = param.param1 + param.param2;
    let peng = param.param1 - param.param2;
    return {penj, peng}; //pakai object, array untuk menampilkan 2 hasil
};
console.log(sum({param2: 1, param1: 2}));

function loop() {
    let a = 0;
    for (let i = 0; i <= 5; i++){
        a += i;
    }
    return a;
}
console.log(loop())