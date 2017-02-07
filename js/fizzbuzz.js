/* jshint esversion: 6 */
// 3 5 10
"use strict";
let fs = require('fs');
let get_fizz_buzz_array = function(arr, x, y, count) {
    let up_count = 1;
    while (up_count <= count) {
        if (up_count % x === 0 && up_count % y === 0) {
            arr.push('FB');
        } else if (up_count % x === 0) {
            arr.push('F');
        } else if (up_count % y === 0) {
            arr.push('B');
        } else {
            arr.push(up_count);
        }
        up_count++;
    }
    return arr;
};


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        let x, y, count;
        let arr = [];
        let line_arr = line.split(' ');
        x = line_arr[0];
        y = line_arr[1];
        count = line_arr[2];
        arr = get_fizz_buzz_array(arr, x, y, count);
        console.log(arr.join(' '));
    }
});
