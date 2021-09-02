////////////////////////////// - Jawaban Soal 1 - //////////////////////////////
console.log(".....Jawaban Soal 1.....\n");
var num = 0;
while (num < 20) {
  console.log("LOOPING PERTAMA");
  while (num < 20) {
    num += 2;
    console.log(num + " - I love coding");
  }
  while (num == 20) {
    console.log("LOOPING KEDUA");
    while (num > 0) {
      console.log(num + " - I will become a frontend developer");
      num -= 2;
    }
  }
  num += 20;
}

////////////////////////////// - Jawaban Soal 2 - //////////////////////////////
console.log("\n\n.....Jawaban Soal 2.....\n");
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 2 == 1) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 == 0) {
    console.log(i + " - Berkualitas");
  } else if (i % 2 == 1) {
    console.log(i + " - Santai");
  }
}

////////////////////////////// - Jawaban Soal 3 - //////////////////////////////
console.log("\n\n.....Jawaban Soal 3.....\n");
var op = "";
for (var i = 1; i <= 7; i++) {
  for (var j = 1; j <= i; j++) {
    op += "#";
  }
  console.log(op);
  op = "";
}

////////////////////////////// - Jawaban Soal 4 - //////////////////////////////
console.log("\n\n.....Jawaban Soal 4.....\n");

var kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];
var newKalimat = kalimat.slice(3, 6);
var newKalimat2 = newKalimat.unshift('"saya');
var newKalimat3 = newKalimat.push('javascript"');
console.log(newKalimat.join(" "));

////////////////////////////// - Jawaban Soal 5 - //////////////////////////////
console.log("\n\n.....Jawaban Soal 5.....\n");

var sayuran = [];
var newSayuran = sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge");
var sortedSayur = sayuran.sort();
for (i=0;i<sortedSayur.length;i++){
  console.log(i+1 + "." + sortedSayur[i]);
}