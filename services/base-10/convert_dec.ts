type Base = 'binario' | 'octogonal' | 'hexadecimal' 

export const Converta = (valor: number, base: Base) => {
  
  switch(base){
      
    case "binario":
      console.log(`converta ${valor} para binario`)
      break;
      
    case "octogonal":
      console.log(`converta ${valor} para octogonal`)
      break;
      
    case "hexadecimal":
      console.log(`converta ${valor} para hexadecimal`)
      break;

    default:
      throw new Error("invalid base")
      
  }
}