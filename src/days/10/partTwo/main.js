import { input } from '../input.js'

const removeCompleteSequences = (lineCopy) => {
  let removing = true
  while (removing) {
    const lineCopyOld = lineCopy
    lineCopy = lineCopy
      .replace('<>', '')
      .replace('()', '')
      .replace('{}', '')
      .replace('[]', '')
    if (lineCopy.length === lineCopyOld.length) removing = false
    console.log(lineCopy)
  }
  return lineCopy
}

const processLine = (line) => {
  let lineCopy = line

  lineCopy = removeCompleteSequences(lineCopy)

  if (lineCopy.includes(')')) return 0
  else if (lineCopy.includes(']')) return 0
  else if (lineCopy.includes('}')) return 0
  else if (lineCopy.includes('>')) return 0

  let score = 0

  while (lineCopy.length !== 0) {
    const last = lineCopy.charAt(lineCopy.length - 1)
    switch (last) {
      case '(':
        lineCopy = lineCopy.slice(0, -1)
        score = score * 5 + 1
        break
      case '[':
        lineCopy = lineCopy.slice(0, -1)
        score = score * 5 + 2
        break
      case '{':
        lineCopy = lineCopy.slice(0, -1)
        score = score * 5 + 3
        break
      case '<':
        lineCopy = lineCopy.slice(0, -1)
        score = score * 5 + 4
        break
    }
    console.log(lineCopy)
  }
  return score
}

const main = (lines) => {
  let total = []
  lines.forEach((line) => {
    total.push(processLine(line))
  })

  total = total.filter((score) => score !== 0).sort((a, b) => a - b)
  return total[Math.floor(total.length / 2)]
}

console.log(main(input))
