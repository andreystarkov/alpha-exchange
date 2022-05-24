export function cardNumberValidation(digits) {
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let cardNum = parseInt(digits[i]);

        if (i % 2 === 0) {
            cardNum = cardNum * 2;

            if (cardNum > 9) {
                cardNum = cardNum - 9;
            }
        }

        sum += cardNum;
    }

    return sum % 10 === 0 && digits.length === 16;
}

