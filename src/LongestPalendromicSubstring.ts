import _ from 'lodash'

function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) return s
  const charMap = new Map()
  let longest = s[0]
  let prevChar = ''
  for (let i = 0; i < len - 1; i++) {
    const char = s[i]
    const nextChar = s[i + 1]
    if (nextChar === prevChar) {
      const start = i - 1
      const end = i + 1
      const { resultStart, resultEnd } = explorePalendrome(s, start, end)
      let currPali = s.substring(resultStart, resultEnd)
      if (currPali.length > longest.length) longest = currPali
    }
    if (char === nextChar) {
      const start = i
      const end = i + 1
      const { resultStart, resultEnd } = explorePalendrome(s, start, end)
      let currPali = s.substring(resultStart, resultEnd)

      if (currPali.length > longest.length) longest = currPali
    }
    prevChar = char
  }
  return longest
}

type PalendromDist = {
  resultStart: number
  resultEnd: number
}

const explorePalendrome = (s: string, start: number, end: number): PalendromDist => {
  let resultStart = start
  let resultEnd = end
  let leftChar = s[resultStart]
  let righChar = s[resultEnd]
  while (leftChar === righChar) {
    resultStart = resultStart - 1
    resultEnd = resultEnd + 1
    if (resultStart < 0) {
      return { resultStart: resultStart + 1, resultEnd: resultEnd }
    }
    if (resultEnd > s.length) {
      return { resultStart: resultStart + 1, resultEnd: resultEnd }
    }
    leftChar = s[resultStart]
    righChar = s[resultEnd]
  }
  return {
    resultStart: resultStart + 1,
    resultEnd
  }
}

const runTests = () => {
  const testCases = [
    { input: "babad", expected: "bab" },
    { input: "cbbd", expected: "bb" },
    { input: "ccc", expected: "ccc" },
    { input: "ac", expected: "a" }
  ]

  testCases.forEach(({ input, expected }) => {
    const result = longestPalindrome(input)
    console.log("Result: ", result, " expected: ", expected)
    _.isEqual(result, expected)
  })
}

runTests()