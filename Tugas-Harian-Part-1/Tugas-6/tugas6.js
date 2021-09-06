////////////////////////////// - Jawaban Soal 1 - //////////////////////////////
console.log(".....Jawaban Soal 1.....\n");

const luasLingkaran = (r) => {const luas = Math.PI * Math.pow(r,2);
    return console.log(`Luas lingkaran dari radius ${r} adalah: ${luas}`);
}
luasLingkaran(4)

const kelilingLingkaran = (r) => {const kel = 2*(Math.PI * r);
return console.log(`Keliling lingkaran dari radius ${r} adalah: ${kel}`);
}
kelilingLingkaran(4)

////////////////////////////// - Jawaban Soal 2 - //////////////////////////////
console.log("\n.....Jawaban Soal 2.....\n");

const introduce = (...rest) => {
    let[nama,umur,jenisKelamin,profesi] = rest;
    return `Pak ${nama} adalah seorang ${profesi} yang berusia ${umur} tahun`
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

////////////////////////////// - Jawaban Soal 3 - //////////////////////////////
console.log("\n.....Jawaban Soal 3.....\n");

const newFunction =(firstName, lastName)=>{
    return {
      firstName,
      lastName,
      fullName: () =>{
        console.log(firstName + " " + lastName)
      }
    }
  }
    
  // kode di bawah ini jangan diubah atau dihapus sama sekali
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)
  newFunction("William", "Imoh").fullName()

  ////////////////////////////// - Jawaban Soal 4 - //////////////////////////////
console.log("\n.....Jawaban Soal 4.....\n");

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
let {name:phoneName,brand:phoneBrand, year, colors:[colorBronze,colorWhite,colorBlack]} = phone

 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

   ////////////////////////////// - Jawaban Soal 5 - //////////////////////////////
console.log("\n.....Jawaban Soal 5.....\n");

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

buku.warnaSampul.push(...warna)

const bukuProgram = {...buku,...dataBukuTambahan}

console.log(bukuProgram);