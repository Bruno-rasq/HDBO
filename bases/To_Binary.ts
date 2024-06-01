import { prefixes } from './prefixes'



/**
 * @description retorna o valor de conversão da base decimal para binario
 */
export const BINARY = (num: number): string => {

  if(num === 0) return prefixes.binary + "0"

  return Number.isInteger(num) ? binaryInt(num) : binaryFloat(num)
}


// INTERGER
// (10)10 -> (??)2
// 10 / 2 -> 5, resta 0
// 3 / 2 -> 2, resta 1
// 2 / 2 -> 1, resta 0
// 1 / 2 -> 0, resta 1

// 0101, ao contraio 1010 -> 0b1010
// (10)10 == (0b1010)2

function binaryInt(num: number): string {
  let digits = []

  while(num > 0){
    digits.push(num % 2)
    num = (num / 2) | 0
  }

  return prefixes.binary + digits.reverse().join('')
}


// FLOAT POINT
// (10.6)10  -> (??)2
// 10.6 -> 10 && 0.6
// 10 _> 0b1010
// 0.6 ?? 
// 0.6 X 2 = 1,2 -> 0b1010,1
// 0.2 X 2 = 0.4 -> 0b1010,10
// 0.4 X 2 = 0.8 -> 0b1010,100
// 0.8 X 2 = 1.6 -> 0b1010,1001
// 0.6.... repete infinitamente
// (10.6)10 -> (0b1010,1001)2

function binaryPrecisionFloat(num: number): string {
  
  const int = Math.floor(num)
  const float = num - int

  return `${binaryInt(int)},${fractionalBinary(float)}`
}

function binaryFloat(num: number): string {
  
  const int = Math.floor(num)
  const float = num - int

  if(float === 0.5) return `${binaryInt(int)},1`

  return `${binaryInt(int)},${fractionalBinary(float)}`
}


function fractionalBinary(frac: number): string {
  
  let loopguard = new Set<number>()
  let binary: number[] = []

  while(true){
    let currfrac = Math.round(frac * 1e10) / 1e10
    if(loopguard.has(currfrac)) break

    loopguard.add(currfrac)
    let curr = frac * 2
    let int = Math.floor(curr)
    binary.push(int)
    frac = curr - int
  }

  return binary.join('')
}