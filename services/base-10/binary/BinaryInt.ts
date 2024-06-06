import { prefixes } from '../../prefixes'

/**
 * @description retorna a conversao inteira de base 10 p/ base 2
 */
export function binaryInt(num: number = 0): string {

  if(num === 0) return '0b0'

  num = Math.floor(num)
  let digits = []

  while(num > 0){
    digits.push(num % 2)
    num = (num / 2) | 0
  }

  return prefixes.binary + digits.reverse().join('')
}