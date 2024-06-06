import { prefixes }    from '../../prefixes'
import { binaryInt }   from './BinaryInt'
import { binaryFloat } from './BinaryFloat'


/**
 * @description retorna o valor de conversão da base decimal para binario
 */
export const BINARY = (num: number): string => {

  if(num === 0) return prefixes.binary + "0"

  return Number.isInteger(num) ? binaryInt(num) : binaryFloat(num)
}