const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

    //parent
search = (input, n, hurufKecil) => {
    let hasil = []
    hurufKecil(input) // input = input.toLowerCase()
name.forEach(newName => {
    let a = hurufKecil(newName) //newName.toLowerCase()
    if (a.includes(input) === true){
        hasil.push(newName)
    }
});
if(hasil.length === 0){
    console.log('Nama yang Anda Cari Tidak Tersedia')
} else {
    hasil = hasil.slice(0,n)
    console.log(hasil)
}
}
//child
kecil = (inp) => {
   inp = inp.toLowerCase()
   return inp
}

search("an", 3, kecil)