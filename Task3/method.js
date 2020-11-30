//1
let x = 123.4567;
let xx = x.toExponential(2); //toExponential digunakan untuk menyederhanakan penulisan nilai decimal (angka penting + orde besar)
console.log(`1. ${xx} \n`);

//2
let yy = x.toFixed(1); //toFixed digunakan untuk menentukan berapa digit angka di belakang koma, 
console.log(`2. ${yy} \n`);

//3
let zz = x.toPrecision(5); //toPrecision digunakan untuk menentukan berapa digit angka yang ingin ditampilkan
console.log(`3. ${zz} \n`);

//4
let string1 = "Hello World";
let string2 = " Good Morning";
let str = string1.charAt(0); //charAt digunakan untuk memanggil karakter dalam string berdasarkan indeksnya
console.log(`4. ${str} \n`);

//5
let gabungString = string1.concat(string2); //concat untuk menggabungkan 2 buah string atau array menjadi satu
console.log(`5. ${gabungString} \n`);

//6
let cariIndeks = string1.indexOf('World'); //indexOf digunakan untuk mengetahui indeks suatu karakter atau kata dari sebuah data string
console.log(`6. ${cariIndeks} \n`);

//7
let arr = [4, 2, 3, 6, 1];
let pop = arr.pop();
console.log(`7. data array-nya menjadi ${arr}, dan hasil pop-nya adalah ${pop} \n`); //pop digunakan untuk menghapus data array yang paling terakhir kemudian menampilkannya

//8
let a = arr.sort(function(a, b){
    return a - b}) //sort digunakan untuk mengurutkan array sesuai besarnya nilai
console.log(`8. ${a} \n`)

//9
arr1 = ['Angela', 'Bella',
'Carol', 'Caroline']
arr2 = []
console.log('9. ')
arr1.forEach(element => { //forEach digunakan untuk memecah Array
    console.log(element)
    
//10
    arr2.push(element) //push untuk memasukkan data ke dalam Array
});
console.log('\n10.')
console.log(arr2)