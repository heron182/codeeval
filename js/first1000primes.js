/*jshint esversion: 6 */
"use strict";
let start = 2;
let check_prime = function(number){
  let div = 2;
  while(div<number){
    if (number%div === 0){
      return false;
    }
    div++;
  }
  return true;
};

let prime_sum = function(prime) {
    let prime_sum = 0;
    let prime_count = 0;
    while (true) {
        if (check_prime(prime)) {
            prime_sum += prime;
            prime_count++;
        }
        if (prime_count === 1000){
          process.stdout.write(prime_sum.toString());
          return;
        }
        prime++;
    }
};
prime_sum(start);
