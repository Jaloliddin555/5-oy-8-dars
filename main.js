
const words = ["non", "banan", "mashina", "asal", "olma", "aziza" , "gul"];

console.log("Hamma sozlar:", words);

const wordsWithN = words.filter(word => word.includes('n'));

console.log("'n' harfi bor sozlar:", wordsWithN);

const wordsWithoutN = words.filter(word => !word.includes('n'));

console.log("'n' harfisiz sozlar:", wordsWithoutN);
