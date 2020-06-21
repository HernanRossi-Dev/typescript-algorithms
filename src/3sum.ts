function threeSum(nums: number[]): number[][] {
  const solutionSet: number[][] = []
  nums.sort((a, b) => a - b)
  let negMap = new Map()
  nums.forEach((num, index) => {
    negMap.set(num, index)
  })
  let boolCheck = Array<boolean>(nums.length).fill(false)
  for (let i = 0; i < nums.length; i++) {
    let aNum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      let bNum = nums[j]
      let cCheck = (aNum + bNum) *-1
      if (negMap.has(cCheck)) {
        let cIndex = negMap.get(cCheck)
        if (cIndex <= j || cIndex <= i) continue
        if (!boolCheck[j] && !boolCheck[cIndex]) {
          boolCheck[j] = true
          boolCheck[cIndex] = true
          solutionSet.push([aNum, bNum, cCheck ])
        }
      }
      while (nums[j + 1] === bNum) {
        j = j + 1
      }
    }
    boolCheck.forEach( (_, i) => boolCheck[i] = false)
    while (nums[i + 1] === aNum) {
      i = i + 1
    }
  }
  return solutionSet
}

const testThreeSum = () => {
  const testCases = [
    { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { input: [-2, 0, 0, 2, 2], expected: [[-2, 0, 2]] },
    { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] }
  ]

  testCases.forEach(({ input, expected }) => {
    const result = threeSum(input)
    console.log("Result: ", result, " expected: ", expected)
  })
}

testThreeSum()