var coinFace = Math.floor(Math.random() *4);

while(coinFace === 0){
    console.log("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");