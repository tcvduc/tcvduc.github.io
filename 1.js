function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

function f1() {
  let n = 1;

  if (n >= 1) {
    f2();
  }

  if (n < 1) {
    f3();
  }
}

f1(f2, f3);
