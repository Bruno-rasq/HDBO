import { prefixes } from '../bases/prefixes'

describe("testando os prefixos de bases", () => {


  test("prefixo da base binaria deve ser 0b", () => {
    expect(prefixes.binary).toBe('0b')
  })

  test("prefixo da base octogonal dev ser 0o", () => {
    expect(prefixes.octogonal).toBe("0o")
  })
  
  test("prefixo da base hexadecimal dev ser 0x", () => {
    expect(prefixes.hexadecimal).toBe("0x")
  })
})