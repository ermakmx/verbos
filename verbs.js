
const verbs = ["buy", "shell"]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
function fn1(){
    let rnd = getRandomInt(0,1);
    document.getElementById("first-verb").innerHTML = verbs[rnd];
}
