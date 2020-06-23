function maxArea(height: number[]): number {
  const length = height.length
  let leftPointer = 0, rightPointer = length -1, maxWater = 0
  let leftHeight = 0, rightHeight = 0
  while(leftPointer < rightPointer) {
    leftHeight = height[leftPointer]
    rightHeight = height[rightPointer]
    let botContainer =   leftHeight > rightHeight ?  rightHeight : leftHeight
    let currentAmount = botContainer * (rightPointer - leftPointer)
    maxWater = currentAmount > maxWater ? currentAmount : maxWater

    if( rightHeight > leftHeight ) {
      leftPointer++    
    }else {
      rightPointer--
    }
  }
  return maxWater
}

const runMaxArea = () => {
  const testCases = [
    { input: [1,8,6,2,5,4,8,3,7], expected: 49 },
    { input: [3, 9, 3, 4, 7, 2, 12, 6], expected: 45 },
    { input: [1,2,4,3], expected: 4 },
    { input:  [10,14,10,4,10,2,6,1,6,12], expected: 96 },
    { input: [
      76,155,15,188,180,154,84,34,187,142,
      22,5,27,183,111,128,50,58,2,112,
      179,2,100,111,115,76,134,120,118,103,
      31,146,58,198,134,38,104,170,25,92,
      112,199,49,140,135,160,20,185,171,
      23,98,150,177,198,61,92,26,147,164,
      144,51,196,42,109,194,177,100,99,99,
      125,143,12,76,192,152,11,152,124,197,
      123,147,95,73,124,45,86,168,24,34,
      133,120,85,81,163,146,75,92,198,
      126,191], expected: 18048 },
  ]

  testCases.forEach(({ input, expected }) => {
    const result = maxArea(input)
    console.log("Result: ", result, " expected: ", expected)
  })
}

runMaxArea()