var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten (name){
  kittens.push (name)
  return kittens
}

function destructivelyPrependKitten (name) {
  name = "Bob"
  kittens.shift (name);
  return kittens
}// Add your functions and code here
