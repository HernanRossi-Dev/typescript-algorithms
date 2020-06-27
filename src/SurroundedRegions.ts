function solveSurroundedRegions(board: string[][]): string[][] {
  if (!board.length && !board[0].length) return board
  const rows = board.length
  const columns = board[0].length

  //find all O's around the perimiter of the board
  //Find all top and bottom 0's
  for (let i = 0; i < columns; i++) {
    const topRegion = board[0][i]
    if (topRegion.localeCompare('O') === 0) {
      recurseRegions(board, 0, i)
    }
    const botRegion = board[rows - 1][i]
    if (botRegion.localeCompare('O') === 0) {
      recurseRegions(board, rows - 1, i)
    }
  }
  for (let j = 1; j < rows; j++) {
    const leftRegion = board[j][0]
    if (leftRegion.localeCompare('O') === 0) {
      recurseRegions(board, j, 0)
    }
    const botRegion = board[j][columns - 1]
    if (botRegion.localeCompare('O') === 0) {
      recurseRegions(board, j, columns - 1)
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j].localeCompare('T') === 0) {
        board[i][j] = 'O'
      } else if ( board[i][j].localeCompare('O') === 0) {
        board[i][j] = 'X'
      }
    }
  }
  return board
}

function recurseRegions(board: string[][], row: number, column: number): void {
  const rows = board.length
  const columns = board[0].length
  if (row >= rows || row < 0 || column >= columns || column < 0) {
    return
  }
  if (board[row][column].localeCompare('O') !== 0) return
  board[row][column] = 'T'
  recurseRegions(board, row + 1, column)
  recurseRegions(board, row - 1, column)
  recurseRegions(board, row, column + 1)
  recurseRegions(board, row, column - 1)
}

const runSurround = () => {
  const testCases = [
    {
      input: [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]],
      expected: [["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]]
    },
  ]
  testCases.forEach(({ input, expected }) => {
    const result = solveSurroundedRegions(input)
    console.log("Result: ", result, " expected: ", expected)
  })
}

runSurround()