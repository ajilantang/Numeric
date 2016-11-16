'use strict'

let addArray = (array) => {

  return array.reduce((a,b) => {
    return a + b;
  }, 0 )

}

let multipArr = (array) => {

  return array.reduce((a,b) => {
    return a * b;
  }, 1 )

}


let factorial = (number) => {

  if(number <= 1){
    return 1
  }
  return number * factorial(number-1)

}

let P = (number,taken) => {

  return factorial(number)/factorial(number-taken)

}


module.exports = {
  addArray   :   addArray,
  multipArr  :   multipArr,
  factorial  :   factorial,
  P          :    P

}
