"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Harry Poter", "Hamza", "Usman"];
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
console.log("Orginal Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
