function intToRoman(num: number): string {
  if(!num) return ''
  let result: string[] = []
  const ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  const tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const hunds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const thous = ['M', 'MM', 'MMM']


  let one = num % 10
  if(one) {
    result = [ones[one -1]].concat(result)
  }
  num = Math.floor(num / 10)
  let ten = num % 10
  if(ten) {
    result = [tens[ten -1]].concat(result)
  }
  num = Math.floor(num / 10)
  let hund = num % 10
  if(hund) {
    result = [hunds[hund-1]].concat(result)
  }
  num = Math.floor(num / 10)
  let thou = num % 10
  if(thou) {
    result = [thous[thou-1]].concat(result)
  }
  return result.join('')
};


const runTests = () => {
  const testCases = [
    { input: 58, expected: "LVIII" },
    { input: 1999, expected: "MCMXCIX" },
    { input: 2000, expected: "MM" },
  ]

  testCases.forEach(({ input, expected }) => {
    const result = intToRoman(input)
    console.log("Result: ", result, " expected: ", expected)
  })
}

runTests()