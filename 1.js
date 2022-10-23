function f1() {
  console.log("f1 function");
}

function f2() {
  console.log("f2 function");
}

function f3() {
  console.log("f3 function");
}

const a2 = ["f1", "f2", "f3"];
const a = [f1, f2, f3];

eval(a2[1] + "()");
// a[1]();
