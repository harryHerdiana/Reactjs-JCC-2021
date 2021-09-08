var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
let i=0;

function bacaBukuPromise(waktu){
    if(i!=books.length){
    readBooksPromise(waktu,books[i]).then(sisaWaktu=>{
        if(sisaWaktu!=1000){
            i++;
            bacaBukuPromise(sisaWaktu);
        }
    })
    }
}

bacaBukuPromise(10000);