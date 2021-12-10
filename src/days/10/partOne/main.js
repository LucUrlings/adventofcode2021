import { input } from '../input.js'

const processLine = (line) => {
  let lineCopy = line

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

  for (let i = 0; i < lineCopy.length; i++) {
    switch (lineCopy.charAt(i)) {
      case ')':
        return 3
      case ']':
        return 57
      case '}':
        return 1197
      case '>':
        return 25137
      case '(':
      case '[':
      case '{':
      case '<':
      default:
        break
    }
  }

  return 0
}

const main = (lines) => {
  let total = 0
  lines.forEach((line) => {
    total += processLine(line)
  })

  return total
}
console.log(main(input))
