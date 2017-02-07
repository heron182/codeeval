/*jshint esversion: 6 */
"use strict";

let arr_prime = [];
let prime_sum;
let check_prime = function(number) {
    let div = 2;
    while (div < number) {
        if (number % div === 0) {
            return false;
        }
        div++;
    }
    return true;
};
let get_primes = function(arr_prime) {
    let number = 2;
    while (arr_prime.length < 1000) {
        if (check_prime(number)) arr_prime.push(number);
        number++;
    }
};

get_primes(arr_prime);
prime_sum = arr_prime.reduce(function(a, b) {
    return a + b;
});

console.log(prime_sum);
