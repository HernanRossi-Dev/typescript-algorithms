function orangesRotting(grid: number[][]): number {
  let rows = grid.length
  let orangeTree = new Array<Orange[] | null[]>(rows)
  let goodOrangeCount = 0
  let bfsQue: Orange[] = []
  if (!rows) return 0
  let columns = grid[0].length
  if (!columns) return 0
  for (let i = 0; i < rows; i++) orangeTree[i] = new Array<Orange>(columns)
  for (let i = 0; i < rows; i++) {
    let row = grid[i]
    for (let j = 0; j < columns; j++) {
      let value = row[j]
      let newNode = new Orange(value, i, j)
      if (value === 2) bfsQue.push(newNode)
      if (value === 1) goodOrangeCount += 1
      orangeTree[i][j] = newNode
    }
  }
  if (goodOrangeCount === 0) return 0
  if (!bfsQue.length) return -1

  let depth = 0
  const directions: number[][] = [[1, 0,], [0, 1], [-1, 0], [0, -1]]
  //Go until no new oranges are part of the bfs search
  while (bfsQue.length > 0) {
    const curOr = bfsQue.shift()
    if (!curOr || curOr.value === 0) continue

    depth = curOr.depth > depth ? curOr.depth : depth
    directions.forEach((direc) => {
      const xPrime = curOr.x + direc[0]
      const yPrime = curOr.y + direc[1]
      if (xPrime >= rows || xPrime < 0) return
      if (yPrime >= columns || yPrime < 0) return
      const neighbour = orangeTree[xPrime][yPrime]
      if (!neighbour || neighbour.value !== 1) return
      neighbour.depth = curOr.depth + 1
      goodOrangeCount -= 1
      neighbour.value = 2
      bfsQue.push(neighbour)
    })
  }

  if (goodOrangeCount > 0) return -1
  return depth
}

class Orange {
  value: number
  x: number
  y: number
  depth: number = 0
  constructor(value: number, x: number, y: number) {
    this.value = value
    this.x = x
    this.y = y
  }
}

const runOranges = () => {
  const testCases = [
    { input: [[2, 1, 1], [1, 1, 0], [0, 1, 1]], expected: 4 },
    { input: [[2, 1, 1], [0, 1, 1], [1, 0, 1]], expected: -1 },
    { input: [[0,2]], expected: 0 },
    { input: [[1], [2], [2]], expected: 1 },
    { input: [[1,0,2,2,2]], expected: -1 },
    { input: [[2], [1], [1], [1], [2], [1], [1]], expected: 2 },
  ]

  testCases.forEach(({ input, expected }) => {
    const result = orangesRotting(input)
    console.log("Result: ", result, " expected: ", expected)
  })
}

runOranges()