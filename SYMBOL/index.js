//localSymbol;
//symbol does not convert to string automatically
//hint types: string | number | default

const local = Symbol("id");
const local_1 = Symbol("id");
// console.log(local === local_1);

const human = {
  name: "Sasha",
  surname: "Chekh",
  [local]: 1,
  [Symbol.toPrimitive](hint) {
    console.log("hint: ", hint);
  },
};

// console.log(human["id"]);

//Global symbols(Symbol.(for, keyFor) ) keyFor does not work fot local symbols

const global = Symbol.for("id");
const global_1 = Symbol.for("id");

// console.log(global === global_1);

console.log(global);
console.log(Symbol.keyFor(global));

//Symbol.(toPrimitive, toString)

// console.log(human + human);
human == human;
