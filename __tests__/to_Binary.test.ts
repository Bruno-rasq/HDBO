import { BINARY } from '../bases/To_Binary'

describe("testando conversão de decimal p/ binario", () => {

  let input: number = 0
  
  beforeAll(() => {
    input = 27
  })

  test("27 base 10 deve ser 11011 na base 2 com prefixo 0b", () => {
    expect(BINARY(input)).toBe("0b11011")
  })

  test("27 da base 10 não deve retornar 11011", () => {
    expect(BINARY(27)).not.toBe(11011)
  })

  test("retorno do método deve ser do tipo string", () => {
    const output: string = "string"
    expect(typeof BINARY(input)).toBe(output)
  })

  test("tipos de retorno que não devem acontecer", () => {
    expect(typeof BINARY(27)).not.toBe("number")
    expect(typeof BINARY(27)).not.toBe("boolean")
    expect(typeof BINARY(27)).not.toBe("null")
    expect(typeof BINARY(27)).not.toBe("undefined")
  })

  it("Number BINARY(27) deve ser 27", () => {
    expect(Number(BINARY(input))).toEqual(27)
  })
  
})