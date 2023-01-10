"use strict";
const human = {
  name: "Sasha",
  surname: "Chekh",
  age: 18,
  weight: 85,
  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  },
};

function makePrivateProp(prop, obj) {
  Object.defineProperty(obj, prop, {
    configurable: false,
    enumerable: false,
  });
}

function hideObjectMethods(obj) {
  for (let key in obj) {
    if (obj[key] instanceof Function) {
      console.log(true);
      Object.defineProperty(obj, key, {
        enumerable: false,
      });
    }
  }
}
makePrivateProp("name", human);

//ACCSESSORS (No value, writable, has configurable, enuumerable)
const man = {};
Object.defineProperty(man, "name", {
  set(value) {
    if (value.length < 4) {
      throw new Error("Name should be longer than 4 symbols");
    }
    this._name = value;
  },
  get() {
    return this._name;
  },
});
