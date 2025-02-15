/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(() => {
    console.log("welcome");
  }, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("hello");
  setTimeout(() => {
    console.log("good bye");
  }, 2000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => {
    console.log("hi again");
  }, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  const intervalId = setInterval(() => {
    console.log("hi for now");
  }, 1000);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  // ADD CODE HERE
  const intervalId = setInterval(func, interval);
  setTimeout(() => {
    clearInterval(intervalId);
  }, duration);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
// everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

function sayHi() {
  console.log("hi");
}

// everyXsecsForYsecs(sayHi, 1000, 5000);
/* CHALLENGE 7 */

function delayCounter(target, wait) {
  var initialValue = 1;
  return function () {
    const intervalId = setInterval(() => {
      console.log(initialValue);
      initialValue++;
      if (initialValue > target) {
        clearInterval(intervalId);
      }
    }, wait);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  // ADD CODE HERE
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 2000);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.value = 0;
    this.id = null;
  }
  // ADD METHODS HERE

  start(val) {
    this.id = setInterval(() => {
      if (this.value < 1) {
        this.clear();
      }
      this.cb(this.value++ % 61);
      if (this.value > 60) {
        this.clear();
      }
    }, 1000);
  }
  clear() {
    this.value = 1;
  }

  reset() {
    clearInterval(this.id);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
  console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
  clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
