/**
 Do not return anything, modify rooms in-place instead.
 */
class RoomNode {
  row: number
  col: number
  constructor(x: number, y: number) {
    this.row = x
    this.col = y
  }
}

function wallsAndGates(rooms: number[][]): void {
  let maxValue = Number.MAX_SAFE_INTEGER
  const rows = rooms.length
  if (rows < 1) return
  const columns = rooms[0].length
  if (columns < 1) return
  const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  const roomQueue: RoomNode[] = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const roomValue = rooms[i][j]
      if (roomValue === 0) {
        const trackRoom = new RoomNode(i, j)
        roomQueue.push(trackRoom)
      } else if (roomValue >= 0 && roomValue < maxValue){
          maxValue = roomValue
      }
    }
  }

  let roomsToCheck = roomQueue.length
  if (roomsToCheck < 1) return
  let room = roomQueue.shift()
  while (room) {
    //check all neighbors and update currentRooms value based on what it finds
    //If it finds a value >= 0 set current value to that value + 1 and remove from the rotating queue
    const { row, col } = room
    directions.forEach((direction) => {
      const [xDelt, yDelt] = direction
      const coordX = row + xDelt
      const coordY = col + yDelt

      if (coordX < 0 || coordX >= rows || coordY < 0 || coordY > columns || rooms[coordX][coordY] !== maxValue) return
        rooms[coordX][coordY] =  rooms[row][col] + 1
        const trackRoom = new RoomNode(coordX, coordY)
        roomQueue.push(trackRoom)
    })
    room = roomQueue.shift()
  }
};