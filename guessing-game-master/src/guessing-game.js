class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.guessNum = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNum = Math.ceil((this.max - this.min) / 2) + this.min
        return this.guessNum
    }

    lower() {
        this.guessNum = this.guessNum + 1
        this.max = this.guessNum - 1
    }

    greater() {
        this.guessNum = this.guessNum - 1
        this.min = this.guessNum + 1
    }
}

module.exports = GuessingGame;