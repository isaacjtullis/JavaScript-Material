// CLOSURES

/*
  Closures are important because they control what is and what isn't in scope
  in a particular function along with which variables are shared between
  sibling functions.

  Closures are frequently used in JavaScript for:
  1.Object Data Privacy
  2.In event handlers
  3.Callback functions

  Follow up questions:
  1. Can you name two common uses for closures?

  WHAT IS A CLOSURES:
  A closure is the combination of a function bundled together with references
  to its surrounding state.

  What the fuck does that mean?
  A closure is an inner function which has access to the outer function scope
  Every call of the outer function creates a new closure
  Every call of the closure interacts with the same outer scope – which is persistent

  EVERY CLOSURES HAS 3 SCOPES:
  1. Local SCOPE
  2. Outer Functions SCOPE
  3. Global SCOPE

  RESOURCES:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
  https://www.codingame.com/playgrounds/6516/closures-in-javascript-for-beginners
  https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
*/

// EXAMPLE OF THE GLOBAL SCOPE CHAIN:
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log('VALUE OF SUM:', sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20


// EX 1

const getSecret = (secret) => {
  const moreSecrets = ' Closures are great!';
  return {
    get: () => secret + moreSecrets,
  };
};




const msg = '.get() should have access to the closure.';
const expected = 1;
const obj = getSecret(1);
const obj2 = getSecret(2);


const actual = obj.get();
console.log('OUTPUT SHOULD EQUAL 1:', actual);
console.log('OUTPUT SHOULD EQUAL 2:', obj2.get());
console.log('OUTPUT SHOULD EQUAL 1:', actual);

// EX 2 - single instance during the execution of the program
const singleton = function () {
    var private_contor = 0;
    return {
        get: function () {
            return "Contor: " + private_contor;
        },
        increment: function() {
            private_contor++;
        }
    };
}();  // Attention Here - the singleton is the result of this function's call
console.log(singleton.get());
console.log(singleton.get());

singleton.increment();
console.log(singleton.get());
singleton.increment();
console.log(singleton.get());

// EX 3
function makeAdder(x) {
  console.log('VALUE OF X:', x);
  return function(y) {
    console.log('INSIDE INNER FUNCTION Y:', y);
    console.log('INSIDE INNER FUNCTION X:', x);
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(makeAdder(13)(2)); // 15
console.log(add5(2));  // 7
console.log(add10(2)); // 12
