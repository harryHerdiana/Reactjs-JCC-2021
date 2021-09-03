////////////////////////////// - Jawaban Soal 1 - //////////////////////////////
console.log(".....Jawaban Soal 1.....\n");

function luasPersegiPanjang(p, l) {
  return p * l;
}

function kelilingPersegiPanjang(p, l) {
  return (p + l) * 2;
}

function volumeBalok(p, l, t) {
  return p * l * t;
}

var panjang = 12;
var lebar = 4;
var tinggi = 8;

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

////////////////////////////// - Jawaban Soal 2 - //////////////////////////////
console.log(".....Jawaban Soal 2.....\n");

function introduce(name, age, address, hobby) {
  return (
    '"Nama saya ' +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    '!"'
  );
}

var nama = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(nama, age, address, hobby);
console.log(perkenalan);

////////////////////////////// - Jawaban Soal 3 - //////////////////////////////
console.log(".....Jawaban Soal 3.....\n");

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];

var objectDaftarPeserta = {
  Nama: arrayDaftarPeserta[0],
  "Jenis Kelamin": arrayDaftarPeserta[1],
  Hobby: arrayDaftarPeserta[2],
  "Tahun Lahir": arrayDaftarPeserta[3],
};
console.log(objectDaftarPeserta);

////////////////////////////// - Jawaban Soal 4 - //////////////////////////////
console.log(".....Jawaban Soal 4.....\n");

var bungbuahan = [
  { nama: "Nanas", warna: "Kuning", "ada bijinya": "tidak", harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", "ada bijinya": "ada", harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  { nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000 },
];

console.log(
  bungbuahan.filter(function (buah) {
    return buah["ada bijinya"] == "tidak";
  })
);

////////////////////////////// - Jawaban Soal 5 - //////////////////////////////
console.log(".....Jawaban Soal 5.....\n");

function tambahDataFilm(jud, dur, gen, thn) {
  dataFilm.push({ judul: jud, durasi: dur, genre: gen, tahun: thn });
};

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);
