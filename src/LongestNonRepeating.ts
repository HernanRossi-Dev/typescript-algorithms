
function lengthOfLongestSubstring(s: string): number {
  const len = s.length
  if (len < 2) return len
  const charMap = new Map()
  let result = 0, start = 0, currentLongest = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (charMap.has(char)) {
      let lastSeen = charMap.get(char)
      charMap.set(char, i)
      const currentLength = i - start
      start = start > lastSeen ? start : lastSeen + 1

      currentLongest = currentLength > currentLongest ? currentLength : currentLongest
    } else {
      charMap.set(char, i)
    }
  }
  let lastWinow = len -  start
  result = currentLongest > lastWinow ? currentLongest : lastWinow
  return result
}


function testLongestSubstr() {
  const testCases = [
    { input: "au", expected: 2 },
    { input: "aab", expected: 2 },
    { input: "cdd", expected: 2 },
    { input: "abba", expected: 2 },
    { input: "dvdf", expected: 3 },
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "tmmzuxt", expected: 5 },
  ]
  testCases.forEach((test) => {
    const result = lengthOfLongestSubstring(test.input)
    console.log('Test result: ', result, ' Expected: ', test.expected)
  })
}

testLongestSubstr()