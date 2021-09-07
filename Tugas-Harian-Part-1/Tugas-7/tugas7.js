////////////////////////////// - Jawaban Soal 1 - //////////////////////////////
console.log(".....Jawaban Soal 1.....\n");
console.log("----Release 0----");

class Animal {
  constructor(name, legs = 4, cold_blooded = false) {
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }
}
var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs);

console.log("\n----Release 1----");

class Ape extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, (legs = 2), cold_blooded);
  }
  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, legs, cold_blooded);
  }
  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

////////////////////////////// - Jawaban Soal 2 - //////////////////////////////
console.log("\n.....Jawaban Soal 2.....\n");

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }
  render() {
    this.date = new Date();
    this.hours = this.date.getHours();
    if (this.hours < 10) this.hours = "0" + this.hours;
    this.mins = this.date.getMinutes();
    if (this.mins < 10) this.mins = "0" + this.mins;
    this.secs = this.date.getSeconds();
    if (this.secs < 10) this.secs = "0" + this.secs;

    this.output = this.template
      .replace("h", this.hours)
      .replace("m", this.mins)
      .replace("s", this.secs);
    console.log(this.output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render()
    this.timer = setInterval(()=>{
        this.render()
    }, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();