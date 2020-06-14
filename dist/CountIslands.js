"use strict";
function numIslands(grid) {
    if (!grid.length || !grid[0].length)
        return 0;
    const adjacencyList = [];
    const columns = grid[0].length;
    const rows = grid.length;
    const landGrid = new Array(rows).fill(null);
    for (let i = 0; i < rows; i++) {
        landGrid[i] = new Array(columns).fill(null);
    }
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            const index = [row, column];
            const land = parseInt(grid[row][column]);
            if (land) {
                const currentNode = new GraphNode(index);
                landGrid[row][column] = currentNode;
            }
        }
    }
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            const landNode = landGrid[row][column];
            if (landNode !== null) {
                adjacencyList.push(landNode);
                const [row, column] = landNode.index;
                const leftNeigh = column - 1 >= 0 ? landGrid[row][column - 1] : null;
                const rightNeigh = column + 1 < columns ? landGrid[row][column + 1] : null;
                const bottomNeigh = row + 1 < rows ? landGrid[row + 1][column] : null;
                const topNeigh = row - 1 >= 0 ? landGrid[row - 1][column] : null;
                if (leftNeigh instanceof GraphNode)
                    landNode.neighborsList.push(leftNeigh);
                if (rightNeigh instanceof GraphNode)
                    landNode.neighborsList.push(rightNeigh);
                if (topNeigh instanceof GraphNode)
                    landNode.neighborsList.push(topNeigh);
                if (bottomNeigh instanceof GraphNode)
                    landNode.neighborsList.push(bottomNeigh);
            }
        }
    }
    let islands = 0;
    const BFSQueue = [];
    let currentNode, visiting;
    while (currentNode = adjacencyList.shift()) {
        if (!currentNode.visited) {
            BFSQueue.push(currentNode);
            while (visiting = BFSQueue.shift()) {
                if (visiting && !visiting.visited) {
                    visiting.visited = true;
                    visiting.neighborsList.forEach((neighbour) => {
                        if (!neighbour.visited) {
                            BFSQueue.push(neighbour);
                        }
                    });
                }
            }
            islands += 1;
        }
    }
    return islands;
}
class GraphNode {
    constructor(index) {
        this.index = index;
        this.neighborsList = [];
        this.visited = false;
        this.label = GraphNode.labels++;
    }
    toString() {
        return {
            index: this.index,
            neighbors: this.neighborsList.length,
            visited: this.visited,
            label: this.label
        };
    }
    printNeighbours() {
        this.neighborsList.forEach(node => console.log(node.label));
    }
}
GraphNode.labels = 1;
function main() {
    const testCases = [
        { grid: [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]], expected: 1 },
        { grid: [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]], expected: 4 },
        { grid: [
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
                ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
            ], expected: 20 },
    ];
    testCases.forEach((test) => {
        const result = numIslands(test.grid);
        console.log('Test result: ', result, ' Expected: ', test.expected);
    });
}
main();
//# sourceMappingURL=CountIslands.js.map