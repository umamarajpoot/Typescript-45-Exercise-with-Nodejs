

function makeSandiwch(...items: string[]){
    console.log("\nMaking a Sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}


makeSandiwch("Chicken", "Cheese", "Mayo" ,"Egg");

makeSandiwch("Bread", "Butter","Egg","Tomato");

makeSandiwch("Bread","Buttter","Mayo","Egg","Tomato","Chicken","Lettuce","kychup");