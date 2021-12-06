import {input} from "../input.mjs";

const drawnNumbers = [23, 91, 18, 32, 73, 14, 20, 4, 10, 55, 40, 29, 13, 25, 48, 65, 2, 80, 22, 16, 93, 85, 66, 21, 9, 36, 47, 72, 88, 58, 5, 42, 53, 69, 52, 8, 54, 63, 76, 12, 6, 99, 35, 95, 82, 49, 41, 17, 62, 34, 51, 77, 94, 7, 28, 71, 92, 74, 46, 79, 26, 19, 97, 86, 87, 37, 57, 64, 1, 30, 11, 96, 70, 44, 83, 0, 56, 90, 59, 78, 61, 98, 89, 43, 3, 84, 67, 38, 68, 27, 81, 39, 15, 50, 60, 24, 45, 75, 33, 31];

const main = (drawnNumbers, inputBingoCards) => {
    let bCards = [...inputBingoCards];

    let winningCard = null
    let lastNumber = null

    for (let i = 0; i < drawnNumbers.length; i++) {
        if (bCards.length === 1) {
            bCards = markNumber(bCards, drawnNumbers[i]);
            if (checkRowsColumns(bCards).length === 1) {
                winningCard = bCards[0]
                lastNumber = drawnNumbers[i];
                break;
            }

        } else {
            bCards = markNumber(bCards, drawnNumbers[i]);
            const idToRemove = checkRowsColumns(bCards);
            bCards = bCards.filter((item, cardIndex) => !idToRemove.includes(cardIndex));
        }
    }

    const winningCardScore = calculateScore(winningCard)

    return `Winning card: ${winningCard}, Calculate score: ${winningCardScore}, Last Drawn number: ${lastNumber}, answer: ${winningCardScore * lastNumber}`;
};

const checkRowsColumns = (bCards) => {
    const bingoCardIndexToRemove = [];

    bCards.forEach((bingoCard, bIndex) => {
        if (checkRows(bingoCard)) {
            if(!bingoCardIndexToRemove.includes(bIndex))
                bingoCardIndexToRemove.push(bIndex);
        }

        if (checkColumns(bingoCard)) {
            if(!bingoCardIndexToRemove.includes(bIndex))
                bingoCardIndexToRemove.push(bIndex);
        }
    });

    return bingoCardIndexToRemove;
};

const checkRows = (bingoCard) => {
    for (let i = 0; i < 5; i++) {
        const first = bingoCard[i][0];
        const second = bingoCard[i][1];
        const third = bingoCard[i][2];
        const fourth = bingoCard[i][3];
        const fifth = bingoCard[i][4];
        if (first.includes("*") && second.includes("*") && third.includes("*") && fourth.includes("*") && fifth.includes("*")) {
            return true
        }
    }
    return false
};

const checkColumns = (bingoCard) => {
    for (let i = 0; i < 5; i++) {
        const first = bingoCard[0][i];
        const second = bingoCard[1][i];
        const third = bingoCard[2][i];
        const fourth = bingoCard[3][i];
        const fifth = bingoCard[4][i];
        if (first.includes("*") && second.includes("*") && third.includes("*") && fourth.includes("*") && fifth.includes("*")) {
            return true
        }
    }
    return false
};

const calculateScore = (bingoCard) => {
    let score = 0;

    bingoCard.forEach(row => {
        row.forEach(number => {
            if (!number.includes("*"))
                score = score + Number(number);
        });
    });
    return score;
};

const markNumber = (bCards, number) => {
    let bingoCards = [...bCards]
    bingoCards.forEach((bingoCard, bIndex) => {
        bingoCard.forEach((row, rIndex) => {
            row.forEach((item, iIndex) => {
                if (item === number.toString()) {
                    bingoCards[bIndex][rIndex][iIndex] = bingoCards[bIndex][rIndex][iIndex].concat("*");
                }
            });
        });
    });
    return bingoCards;
};

console.log(main(drawnNumbers, input));
