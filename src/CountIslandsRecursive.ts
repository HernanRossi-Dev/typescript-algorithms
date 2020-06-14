
//More time efficient recursive algorithm
function numIslands(grid: string[][]): number {

  if (!grid.length || !grid[0].length) return 0
  let result = 0
  grid.forEach((row, x) => {
    row.forEach((_, y) => {
      if (grid[x][y] === '1') {
        result += 1
        exploreLand(grid, x, y)
      }
    })
  })
  return result
}

function exploreLand(grid: string[][], x: number, y: number) {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') return
  grid[x][y] = '0'
  exploreLand(grid, x - 1, y)
  exploreLand(grid, x + 1, y)
  exploreLand(grid, x, y - 1)
  exploreLand(grid, x, y + 1)
}


function main() {
  const testCases = [
    { grid: [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]], expected: 1 },
    { grid: [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]], expected: 3 },
    {
      grid: [
        ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "0", "1", "1"],
        ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "0"],
        ["1", "0", "1", "1", "1", "0", "0", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1"],
        ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1"],
        ["1", "0", "1", "1", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "0"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "0"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]], expected: 1
    },

  ]

  testCases.forEach((test) => {
    const result = numIslands(test.grid)
    console.log('Test result: ', result, ' Expected: ', test.expected)
  })
}

main()