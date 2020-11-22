var nilaiAwal = 5
var nilaiAkhir = 20
var arra = [2, 25, 4, 14, 17, 30, 8]

if (typeof(nilaiAwal) != 'number' || typeof(nilaiAkhir) != 'number' || Array.isArray(arra) != true) {
    console.log("masukkan salah")
} else {
seleksiNilai = (nilaiAwal, nilaiAkhir, arra) => {
    let newArray = []
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else {
    arra.forEach(element => {
        if (element < nilaiAkhir && element > nilaiAwal){
            newArray.push(element)
        } 
        });
        if (newArray.length == 0) {
        console.log('tidak ada nilai')
        }
        else {
        let a = newArray.sort(function(a, b){return a - b})
        console.log(a)
        }
}
}
seleksiNilai(nilaiAwal, nilaiAkhir, arra)
}