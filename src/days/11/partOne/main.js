import { input } from '../input.js'

const ANSI_RESET = '\u001B[0m'
const ANSI_BLACK = '\u001B[30m'
const ANSI_RED = '\u001B[31m'
const ANSI_GREEN = '\u001B[32m'
const ANSI_YELLOW = '\u001B[33m'
const ANSI_BLUE = '\u001B[34m'
const ANSI_PURPLE = '\u001B[35m'
const ANSI_CYAN = '\u001B[36m'
const ANSI_WHITE = '\u001B[37m'

const logGrid = (grid) => console.log(` 
${grid[0][0] === 0 ? ANSI_YELLOW : ''}${grid[0][0]}${ANSI_RESET} ${grid[0][1] === 0 ? ANSI_YELLOW : ''}${grid[0][1]}${ANSI_RESET} ${grid[0][2] === 0 ? ANSI_YELLOW : ''}${grid[0][2]}${ANSI_RESET} ${grid[0][3] === 0 ? ANSI_YELLOW : ''}${grid[0][3]}${ANSI_RESET} ${grid[0][4] === 0 ? ANSI_YELLOW : ''}${grid[0][4]}${ANSI_RESET} ${grid[0][5] === 0 ? ANSI_YELLOW : ''}${grid[0][5]}${ANSI_RESET} ${grid[0][6] === 0 ? ANSI_YELLOW : ''}${grid[0][6]}${ANSI_RESET} ${grid[0][7] === 0 ? ANSI_YELLOW : ''}${grid[0][7]}${ANSI_RESET} ${grid[0][8] === 0 ? ANSI_YELLOW : ''}${grid[0][8]}${ANSI_RESET} ${grid[0][9] === 0 ? ANSI_YELLOW : ''}${grid[0][9]}${ANSI_RESET} 
${grid[1][0] === 0 ? ANSI_YELLOW : ''}${grid[1][0]}${ANSI_RESET} ${grid[1][1] === 0 ? ANSI_YELLOW : ''}${grid[1][1]}${ANSI_RESET} ${grid[1][2] === 0 ? ANSI_YELLOW : ''}${grid[1][2]}${ANSI_RESET} ${grid[1][3] === 0 ? ANSI_YELLOW : ''}${grid[1][3]}${ANSI_RESET} ${grid[1][4] === 0 ? ANSI_YELLOW : ''}${grid[1][4]}${ANSI_RESET} ${grid[1][5] === 0 ? ANSI_YELLOW : ''}${grid[1][5]}${ANSI_RESET} ${grid[1][6] === 0 ? ANSI_YELLOW : ''}${grid[1][6]}${ANSI_RESET} ${grid[1][7] === 0 ? ANSI_YELLOW : ''}${grid[1][7]}${ANSI_RESET} ${grid[1][8] === 0 ? ANSI_YELLOW : ''}${grid[1][8]}${ANSI_RESET} ${grid[1][9] === 0 ? ANSI_YELLOW : ''}${grid[1][9]}${ANSI_RESET} 
${grid[2][0] === 0 ? ANSI_YELLOW : ''}${grid[2][0]}${ANSI_RESET} ${grid[2][1] === 0 ? ANSI_YELLOW : ''}${grid[2][1]}${ANSI_RESET} ${grid[2][2] === 0 ? ANSI_YELLOW : ''}${grid[2][2]}${ANSI_RESET} ${grid[2][3] === 0 ? ANSI_YELLOW : ''}${grid[2][3]}${ANSI_RESET} ${grid[2][4] === 0 ? ANSI_YELLOW : ''}${grid[2][4]}${ANSI_RESET} ${grid[2][5] === 0 ? ANSI_YELLOW : ''}${grid[2][5]}${ANSI_RESET} ${grid[2][6] === 0 ? ANSI_YELLOW : ''}${grid[2][6]}${ANSI_RESET} ${grid[2][7] === 0 ? ANSI_YELLOW : ''}${grid[2][7]}${ANSI_RESET} ${grid[2][8] === 0 ? ANSI_YELLOW : ''}${grid[2][8]}${ANSI_RESET} ${grid[2][9] === 0 ? ANSI_YELLOW : ''}${grid[2][9]}${ANSI_RESET} 
${grid[3][0] === 0 ? ANSI_YELLOW : ''}${grid[3][0]}${ANSI_RESET} ${grid[3][1] === 0 ? ANSI_YELLOW : ''}${grid[3][1]}${ANSI_RESET} ${grid[3][2] === 0 ? ANSI_YELLOW : ''}${grid[3][2]}${ANSI_RESET} ${grid[3][3] === 0 ? ANSI_YELLOW : ''}${grid[3][3]}${ANSI_RESET} ${grid[3][4] === 0 ? ANSI_YELLOW : ''}${grid[3][4]}${ANSI_RESET} ${grid[3][5] === 0 ? ANSI_YELLOW : ''}${grid[3][5]}${ANSI_RESET} ${grid[3][6] === 0 ? ANSI_YELLOW : ''}${grid[3][6]}${ANSI_RESET} ${grid[3][7] === 0 ? ANSI_YELLOW : ''}${grid[3][7]}${ANSI_RESET} ${grid[3][8] === 0 ? ANSI_YELLOW : ''}${grid[3][8]}${ANSI_RESET} ${grid[3][9] === 0 ? ANSI_YELLOW : ''}${grid[3][9]}${ANSI_RESET} 
${grid[4][0] === 0 ? ANSI_YELLOW : ''}${grid[4][0]}${ANSI_RESET} ${grid[4][1] === 0 ? ANSI_YELLOW : ''}${grid[4][1]}${ANSI_RESET} ${grid[4][2] === 0 ? ANSI_YELLOW : ''}${grid[4][2]}${ANSI_RESET} ${grid[4][3] === 0 ? ANSI_YELLOW : ''}${grid[4][3]}${ANSI_RESET} ${grid[4][4] === 0 ? ANSI_YELLOW : ''}${grid[4][4]}${ANSI_RESET} ${grid[4][5] === 0 ? ANSI_YELLOW : ''}${grid[4][5]}${ANSI_RESET} ${grid[4][6] === 0 ? ANSI_YELLOW : ''}${grid[4][6]}${ANSI_RESET} ${grid[4][7] === 0 ? ANSI_YELLOW : ''}${grid[4][7]}${ANSI_RESET} ${grid[4][8] === 0 ? ANSI_YELLOW : ''}${grid[4][8]}${ANSI_RESET} ${grid[4][9] === 0 ? ANSI_YELLOW : ''}${grid[4][9]}${ANSI_RESET} 
${grid[5][0] === 0 ? ANSI_YELLOW : ''}${grid[5][0]}${ANSI_RESET} ${grid[5][1] === 0 ? ANSI_YELLOW : ''}${grid[5][1]}${ANSI_RESET} ${grid[5][2] === 0 ? ANSI_YELLOW : ''}${grid[5][2]}${ANSI_RESET} ${grid[5][3] === 0 ? ANSI_YELLOW : ''}${grid[5][3]}${ANSI_RESET} ${grid[5][4] === 0 ? ANSI_YELLOW : ''}${grid[5][4]}${ANSI_RESET} ${grid[5][5] === 0 ? ANSI_YELLOW : ''}${grid[5][5]}${ANSI_RESET} ${grid[5][6] === 0 ? ANSI_YELLOW : ''}${grid[5][6]}${ANSI_RESET} ${grid[5][7] === 0 ? ANSI_YELLOW : ''}${grid[5][7]}${ANSI_RESET} ${grid[5][8] === 0 ? ANSI_YELLOW : ''}${grid[5][8]}${ANSI_RESET} ${grid[5][9] === 0 ? ANSI_YELLOW : ''}${grid[5][9]}${ANSI_RESET} 
${grid[6][0] === 0 ? ANSI_YELLOW : ''}${grid[6][0]}${ANSI_RESET} ${grid[6][1] === 0 ? ANSI_YELLOW : ''}${grid[6][1]}${ANSI_RESET} ${grid[6][2] === 0 ? ANSI_YELLOW : ''}${grid[6][2]}${ANSI_RESET} ${grid[6][3] === 0 ? ANSI_YELLOW : ''}${grid[6][3]}${ANSI_RESET} ${grid[6][4] === 0 ? ANSI_YELLOW : ''}${grid[6][4]}${ANSI_RESET} ${grid[6][5] === 0 ? ANSI_YELLOW : ''}${grid[6][5]}${ANSI_RESET} ${grid[6][6] === 0 ? ANSI_YELLOW : ''}${grid[6][6]}${ANSI_RESET} ${grid[6][7] === 0 ? ANSI_YELLOW : ''}${grid[6][7]}${ANSI_RESET} ${grid[6][8] === 0 ? ANSI_YELLOW : ''}${grid[6][8]}${ANSI_RESET} ${grid[6][9] === 0 ? ANSI_YELLOW : ''}${grid[6][9]}${ANSI_RESET} 
${grid[7][0] === 0 ? ANSI_YELLOW : ''}${grid[7][0]}${ANSI_RESET} ${grid[7][1] === 0 ? ANSI_YELLOW : ''}${grid[7][1]}${ANSI_RESET} ${grid[7][2] === 0 ? ANSI_YELLOW : ''}${grid[7][2]}${ANSI_RESET} ${grid[7][3] === 0 ? ANSI_YELLOW : ''}${grid[7][3]}${ANSI_RESET} ${grid[7][4] === 0 ? ANSI_YELLOW : ''}${grid[7][4]}${ANSI_RESET} ${grid[7][5] === 0 ? ANSI_YELLOW : ''}${grid[7][5]}${ANSI_RESET} ${grid[7][6] === 0 ? ANSI_YELLOW : ''}${grid[7][6]}${ANSI_RESET} ${grid[7][7] === 0 ? ANSI_YELLOW : ''}${grid[7][7]}${ANSI_RESET} ${grid[7][8] === 0 ? ANSI_YELLOW : ''}${grid[7][8]}${ANSI_RESET} ${grid[7][9] === 0 ? ANSI_YELLOW : ''}${grid[7][9]}${ANSI_RESET} 
${grid[8][0] === 0 ? ANSI_YELLOW : ''}${grid[8][0]}${ANSI_RESET} ${grid[8][1] === 0 ? ANSI_YELLOW : ''}${grid[8][1]}${ANSI_RESET} ${grid[8][2] === 0 ? ANSI_YELLOW : ''}${grid[8][2]}${ANSI_RESET} ${grid[8][3] === 0 ? ANSI_YELLOW : ''}${grid[8][3]}${ANSI_RESET} ${grid[8][4] === 0 ? ANSI_YELLOW : ''}${grid[8][4]}${ANSI_RESET} ${grid[8][5] === 0 ? ANSI_YELLOW : ''}${grid[8][5]}${ANSI_RESET} ${grid[8][6] === 0 ? ANSI_YELLOW : ''}${grid[8][6]}${ANSI_RESET} ${grid[8][7] === 0 ? ANSI_YELLOW : ''}${grid[8][7]}${ANSI_RESET} ${grid[8][8] === 0 ? ANSI_YELLOW : ''}${grid[8][8]}${ANSI_RESET} ${grid[8][9] === 0 ? ANSI_YELLOW : ''}${grid[8][9]}${ANSI_RESET} 
${grid[9][0] === 0 ? ANSI_YELLOW : ''}${grid[9][0]}${ANSI_RESET} ${grid[9][1] === 0 ? ANSI_YELLOW : ''}${grid[9][1]}${ANSI_RESET} ${grid[9][2] === 0 ? ANSI_YELLOW : ''}${grid[9][2]}${ANSI_RESET} ${grid[9][3] === 0 ? ANSI_YELLOW : ''}${grid[9][3]}${ANSI_RESET} ${grid[9][4] === 0 ? ANSI_YELLOW : ''}${grid[9][4]}${ANSI_RESET} ${grid[9][5] === 0 ? ANSI_YELLOW : ''}${grid[9][5]}${ANSI_RESET} ${grid[9][6] === 0 ? ANSI_YELLOW : ''}${grid[9][6]}${ANSI_RESET} ${grid[9][7] === 0 ? ANSI_YELLOW : ''}${grid[9][7]}${ANSI_RESET} ${grid[9][8] === 0 ? ANSI_YELLOW : ''}${grid[9][8]}${ANSI_RESET} ${grid[9][9] === 0 ? ANSI_YELLOW : ''}${grid[9][9]}${ANSI_RESET} 
`)

const addOne = (lines) => lines.map(row => row.map(number => number + 1))


const checkForFlash = (lines, posY, posX) => {

}

const changed = (old, current) => old.sort().join(',') === current.sort().join(',')


const checkArrayForFlash = (lines) => {
  let tempLines = [...lines]

  let contine = true

  while (true) {
    let oldLines = [...tempLines]

    for (let i = 0; i < tempLines.length; i++) {
      for (let j = 0; j < tempLines[i].length; j++) {
        tempLines = checkForFlash(lines, i, j)
      }
    }

  }


  for (let i = 0; i < tempLines.length; i++) {

  }

  lines.forEach((row, rIndex) => {
    row.forEach((number, nIndex) => {

    })
  })
}

const cycleCount = 1

const main = (lineInput) => {

  let lines = [...lineInput]
  logGrid(lines)

  for (let i = 0; i < cycleCount; i++) {
    lines = addOne(lines)
    logGrid(lines)
  }

}
console.log(main(input))