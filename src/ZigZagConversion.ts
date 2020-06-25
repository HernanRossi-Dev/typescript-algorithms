function convert(s: string, numRows: number): string {
  if (s.length < 2) return s
  let result: string[] = []
  const hashMap = new Map()
  for (let i = 0; i < numRows; i++) {
    hashMap.set(i, [])
  }
  let flipper = 1
  let pointer = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let rowIndex = pointer % numRows
    const rowList = hashMap.get(rowIndex)
    rowList.push(char)
    hashMap.set(rowIndex, rowList)
    pointer = pointer + flipper
    if(pointer === 0 || pointer === numRows-1) flipper *= (-1)
  }

  hashMap.forEach((row: string[], index: number ) => {
    result = result.concat(row)})
  return result.join('')
}

const runZigZagConv = () => {
  const testCases = [
    { input: { s: "PAYPALISHIRING", numRows: 3 }, expected: "PAHNAPLSIIGYIR" },
    { input: { s: "PAYPALISHIRING", numRows: 4 }, expected: "PINALSIGYAHRPI" },
  ]

  testCases.forEach(({ input, expected }) => {
    const { s, numRows } = input
    const result = convert(s, numRows)
    console.log("Result: ", result, " expected: ", expected)
  })
}

runZigZagConv()