function reverse(x: number): number {
  let input = x
  let result = 0
  let negative = 1
  if (input < 0) {
      input = (input * -1)
      negative = x / ((-1)*x)
  }

  if (!input) return result
  
  let division = 1
  let value = input
  while (value >= 1) {
      value = (input / division) % 10
      const digit = Math.trunc(value)
      result = result*10 + digit
      division *= 10
  }    
  
  return (result * negative) / 10
}

const testCases = [
  [-123, -321],
  [4356, 6534]
]

testCases.forEach(([input, expected]) => {
  const result = reverse(input)
  console.log(result === expected)
})