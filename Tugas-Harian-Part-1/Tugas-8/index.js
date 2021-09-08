// // di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks di sini
let i=0;

function bacaBuku(waktu) {
  readBooks(waktu,books[i], (sisaWaktu)=>{
    if (sisaWaktu !== 0 && i<= books.length) {
        i+=1;
      bacaBuku(sisaWaktu);
    }
  });
}
bacaBuku(10000)


// function periksaAntrianDokter(nomerAntri, callback) {
//     console.log(`sekarang antrian ke-${nomerAntri}`)
//     setTimeout(function () {
//       if(nomerAntri === 10 ) {
//         console.log("saya masuk ruangan dokter")
//         callback(0)
//       } else {
//         console.log("saya masih menunggu")
//         callback(nomerAntri+1)
//       }
//     }, 1000)
//   }

//   var nomorAntriSekarang = 7
//   function execute(nomorAntri){
//     periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
//       if (nomorAntriBaru !== 0){
//         execute(nomorAntriBaru)
//       }
//     })
//   }

//   execute(nomorAntriSekarang)
