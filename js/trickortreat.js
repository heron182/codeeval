"use strict";
let fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    let v, z, w, h = 0
    let vampires, zombies, witches, houses, total, perchild = 0
    if (line !== "") { // ignore empty lines
        let subline = line.replace(/Zombies:|Vampires:|Witches:|Houses:|\s/g, '').split(',')
        vampires = +subline[0]
        zombies = +subline[1]
        witches = +subline[2]
        houses = +subline[3]
        total = (vampires * 3 + zombies * 4 + witches * 5) * houses
        perchild = Math.floor(total / (vampires + zombies + witches))
        console.log(perchild);
    }
});
return 0;
