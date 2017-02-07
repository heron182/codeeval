/* jshint esversion: 6 */
// yellow
// tooth
"use strict";
let fs = require('fs');

function DuplicateClass() {
    this.check_duplicate = function(line) {
        let word_array = line.split('');
        let dump_array = [];
        let letter;
        while (!!word_array) {
            letter = word_array.shift();
            if ((word_array.indexOf(letter) < 0 && dump_array.indexOf(letter) < 0) ||
                word_array.length === 0) {
                this.print_letter(letter);
                return;
            }
            dump_array.push(letter);
        }
    };

    this.print_letter = function(letter) {
        console.log(letter);
    };
}

let duplicate = new DuplicateClass();
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== '') {
        duplicate.check_duplicate(line);
    }
});
