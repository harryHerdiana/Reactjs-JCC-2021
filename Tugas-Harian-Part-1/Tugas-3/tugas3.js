/* soal 1

buatlah variabel-variabel seperti di bawah ini

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
gabungkan variabel-variabel tersebut agar menghasilkan output

saya Senang belajaR JAVASCRIP 
*/
// Jawaban Soal 1//

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";


var gabunganKata = kataPertama + " " + kataKedua.replace("s", "S") + " " + kataKetiga.replace("r", "R") + " " + kataKeempat.slice(0, 9).toUpperCase()
console.log("...Jawaban Soal 1 :" + gabunganKata);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* soal 2

buatlah variabel-variabel seperti di bawah ini

var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga= "6";
var tinggiSegitiga = "7";
ubah lah variabel diatas ke dalam integer dan gunakan pada operasi perhitungan dari keliling persegi panjang dan luas segitiga dengan variabel di bawah ini:

var kelilingPersegiPanjang;
var luasSegitiga;

lalu tampilkan dengan console.log */

//Jawaban Soal 2//


var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang = (Number(panjangPersegiPanjang) + Number(lebarPersegiPanjang)) * 2

var luasSegitiga = (Number(alasSegitiga) * Number(tinggiSegitiga)) / 2
console.log("...Jawaban Soal 2:");
console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* soal 3

buatlah variabel-variabel seperti di bawah ini

var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord; // do your own! 
var thirdWord; // do your own! 
var fourthWord; // do your own! 
var fifthWord; // do your own! 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);
selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:

Kata Pertama: wah
Kata Kedua: javascript
Kata Ketiga: itu
Kata Keempat: keren
Kata Kelima: sekali */

//Jawaban Soal 3//

var sentences = 'wah javascript itu keren sekali';

var firstWord = sentences.substring(0, 3);
var secondWord = sentences.substring(3, 14);
var thirdWord = sentences.substring(14, 18);
var fourthWord = sentences.substring(18, 24);
var fifthWord = sentences.substring(24, 31);

console.log("...Jawaban Soal 3:");
console.log('Kata Pertama: ' + firstWord);
console.log('Kata Kedua: ' + secondWord);
console.log('Kata Ketiga: ' + thirdWord);
console.log('Kata Keempat: ' + fourthWord);
console.log('Kata Kelima: ' + fifthWord);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
soal 4

buatlah variabel seperti di bawah ini

var nilaiJohn = 80;
var nilaiDoe = 50;

tentukan indeks nilai dari nilaiJohn dan nilaiDoe (tampilkan dengan console.log) dengan kondisi :

nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E
kerjakan soal ini tanpa menggunakan function(ini materi hari 5) */

//Jawaban Soal 4//

var nilaiJohn = 80;
var nilaiDoe = 50;

console.log("...Jawaban Soal 4:");

if (nilaiJohn >= 80) {
    console.log("indeksnya John A");
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
    console.log("indeksnya John B");
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
    console.log("indeksnya John C");
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
    console.log("indeksnya John D");
} else {
    console.log("indeksnya John E");
}

if (nilaiDoe >= 80) {
    console.log("indeksnya Doe A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
    console.log("indeksnya Doe B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
    console.log("indeksnya Doe C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
    console.log("indeksnya Doe D");
} else if (nilaiDoe < 50) {
    console.log("indeksnya Doe E");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
soal 5

buatlah variabel seperti di bawah ini

var tanggal = 22;
var bulan = 7;
var tahun = 2020;
ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah
switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22
Juli 2020 (isi di sesuaikan dengan 
    tanggal lahir masing-masing) */


//Jawaban Soal 5//

var tanggal = 17;
var bulan = 8;
var tahun = 1993;

console.log("...Jawaban Soal 5:");
switch (bulan) {
    case 1: {
        console.log(tanggal + " Januari "+ tahun);
        break;
    }
    case 2: {
        console.log(tanggal + " Februari "+ tahun);
        break;
    }
    case 3: {
        console.log(tanggal + " Maret "+ tahun);
        break;
    }
    case 4: {
        console.log(tanggal + " April "+ tahun);
        break;
    }
    case 5: {
        console.log(tanggal + " Mei "+ tahun);
        break;
    }
    case 6: {
        console.log(tanggal + " Juni "+ tahun);
        break;
    }
    case 7: {
        console.log(tanggal + " Juli "+ tahun);
        break;
    }
    case 8: {
        console.log(tanggal + " Agustus "+ tahun);
        break;
    }
    case 9: {
        console.log(tanggal + " September "+ tahun);
        break;
    }
    case 10: {
        console.log(tanggal + " Oktober "+ tahun);
        break;
    }
    case 11: {
        console.log(tanggal + " November "+ tahun);
        break;
    }
    case 12: {
        console.log(tanggal + " Desember "+ tahun);
        break;
    }
}