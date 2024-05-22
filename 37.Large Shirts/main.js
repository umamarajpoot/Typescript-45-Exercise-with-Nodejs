"use strict";
function make_shirt(size = "large", message = "I Love TypeScript") {
    console.log(`Making  a ${size} t-shirt with the message "${message} printed on it`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Drive into Coding");
