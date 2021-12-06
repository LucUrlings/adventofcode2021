import {input} from "../input.mjs";

const main = (lines) => {
    let inputLines = [...lines];

    inputLines = inputLines.filter(item => {
        const x1 = item[0][0]
        const y1 = item[0][1]
        const x2 = item[1][0]
        const y2 = item[1][1]
        return (x1 === x2 || y1 === y2)
    })

    const grid = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

    inputLines.forEach(item => {
        const x1 = item[0][0]
        const y1 = item[0][1]
        const x2 = item[1][0]
        const y2 = item[1][1]

        if (x1 === x2) {
            const baseX = x1;
            const numbersInBetween = generateNumbersInBetween(y1, y2)
            numbersInBetween.forEach(number => {
                grid[baseX][number]++
            })
        } else if (y1 === y2) {
            const baseY = y1;
            const numbersInBetween = generateNumbersInBetween(x1, x2)
            numbersInBetween.forEach(number => {
                grid[number][baseY]++
            })
        }
    })

    let count = 0
    grid.forEach(row => {
        row.forEach(item => {
            if (item >= 2)
                count++
        })
    })
    return count
}

const generateNumbersInBetween = (s, e) => {
    let start;
    let end;
    let array = []
    if (s < e) {
        start = s;
        end = e;
    } else if (s > e) {
        start = e;
        end = s;
    }
    while (start < (end + 1)) {
        array.push(start);
        start++;
    }
    return array
};

console.log(main(input))