import { binaryInt } from './BinaryInt'

/**
 * @description returna o valor de conversao da base 10 com casa decimal p/ base 2
 */
export function binaryFloat(num: number = 0): string {

  if(num === 0) return '0b0'
  // se o nmero for inteiro retorna a conversao inteira
  if(Number.isInteger(num)){
    return binaryInt(num)
  }

  const int = Math.floor(num)
  const float = num - int

  return `${binaryInt(int)},${fractionalBinary(float)}`
}


/**
 * @description Calcula a parte fracional de um float point p/ binario
 */
export function fractionalBinary(frac: number): string {

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