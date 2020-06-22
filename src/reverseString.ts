function reverseString(s: string[]): void {
  const length = s.length
  const swapCount = Math.floor(length / 2)
  
  for (let i = 0; i < swapCount; i++) {
      let temp = s[i]
      s[i] = s[length - i -1]
      s[length - 1 - i] = temp
  }
};