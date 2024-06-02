import 'jest-extended'
import { BINARY, binaryInt, binaryFloat, fractionalBinary } from '../bases/To_Binary'
import { prefixes } from '../bases/prefixes'


describe("método BINARY", () => {

  let input1: number = 0
  let input2: number = 0
  let input3: number = 0
  let input4: number = 0
  
  beforeAll(() => {
    input1 = 27
    input2 = 12.5
    input3 = 1
    input4 = 0
  })

  test("o método deve retorna o valor com o prefixo '0b' ", () => {
    const prefixo : string = prefixes.binary
    const binario = BINARY(input1)
    
    expect(binario).toStartWith(prefixo)
    expect(BINARY(input1)).toMatch(/^0b/)
    expect(BINARY(input1)).not.toBe(11011)
  })

  it("testando conversão de 0 da base 10 p/ binario", () => {
    expect(BINARY(input4)).toBe("0b0")
  })

  it("testando conversão de decimal inteiro p/ binario", () => {
    expect(BINARY(input1)).toBe("0b11011")
  })

  it("testando conversão de decimal com casa decimal p/ binario", () => {
    expect(BINARY(input2)).toBe("0b1100,10")
  })

  test("retorno do método deve ser do tipo string", () => {
    const output: string = "string"
    expect(typeof BINARY(input1)).toBe(output)
    expect(typeof BINARY(input2)).toBe(output)
    expect(typeof BINARY(input3)).toBe(output)
    expect(typeof BINARY(input4)).toBe(output)
  })

  test("tipos de retorno que não devem acontecer", () => {
    expect(typeof BINARY(input1)).not.toBe("number")
    expect(typeof BINARY(input1)).not.toBe("boolean")
    expect(typeof BINARY(input1)).not.toBe("null")
    expect(typeof BINARY(input1)).not.toBe("undefined")
  })

  it("um decimal convertido p/ binario ao ser convertido p/ decimal deve retornar o mesmo valor", () => {
    const num: number = 27
    const b_num: string = BINARY(num)
    expect(Number(b_num)).toEqual(num)
  })
  
})

describe("método binaryInt", () => {

  let input1: number = 0;
  let input2: number = 0;
  let input3: number = 0;

  beforeAll(() => {
    input1 = 10
    input2 = 0
    input3 = 10.5
    
  })

  it("o retorno deve conter o prefixo '0b'", () => {
    const prefixo: string = prefixes.binary
    expect(binaryInt(10)).toStartWith(prefixo)
    expect(binaryInt(10)).toMatch(/^0b/)
  })

  it("por padrao o metodo retorna o binario de zero caso não seja passado um valor", () => {
    const output: string = "0b0"
    expect(binaryInt()).toBe(output)
  })

  it("testando conversao de base 10 p/  base 2", () => {
    expect(binaryInt(input1)).toEqual("0b1010")
    expect(binaryInt(input2)).toEqual("0b0")
    expect(binaryInt(input3)).toEqual("0b1010")
  })
  
})

describe("método binaryFloat", () => {

  let input1: number = 0;
  let input2: number = 0;
  let input3: number = 0;

  beforeAll(() => {
    input1 = 10
    input2 = 12.6
    input3 = 10.5

  })

  it("o retorno deve conter o prefixo '0b'", () => {
    const prefixo: string = prefixes.binary
    expect(binaryFloat(10)).toStartWith(prefixo)
    expect(binaryFloat(input2)).toMatch(/^0b/)
    expect(binaryFloat(input3)).toMatch(/^0b/)
  })

  it("metodo sem parametro retorna binario de zero", () => {
    expect(binaryFloat()).toEqual('0b0')
  })

  it("retorno para number float", () => {
    const output: string = '0b1100,1001'
    expect(binaryFloat(input2)).toBe(output)
  })
  
  it("retorno para number int", () => {
    const output: string = '0b1100'
    expect(binaryFloat(12)).toBe(output)
  })
  
})

describe("método fractionalBinaery", () => {

  it("retorno não deve ter prexifo", () => {
    const prefixo: string = prefixes.binary
    expect(fractionalBinary(0.6)).not.toMatch(prefixo)
    expect(fractionalBinary(0.6)).not.toStartWith(prefixo)
  })

  it("testando resultado", () => {
    const fracao = 0.6
    const output = 1001
    expect(fractionalBinary(fracao)).toBe(output)
  })
})