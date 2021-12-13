export type Divisors = [number, number];

class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

export class NegativeInput extends CustomError {
    constructor() {
        super("Cannot fizzbuzz negative numbers");
    }
}

export class DivisorSetAt1 extends CustomError {
    constructor() {
        super("Divisor cannot be 1");
    }
}

export class NegativeDivisor extends CustomError {
    constructor() {
        super("Divisor cannot be negative");
    }
}

export class SameDivisors extends CustomError {
    constructor() {
        super("Divisors must be distinct");
    }
}

export function fizzbuzz(divisors: Divisors = [3, 5], num: number): string {
    if (num <= 0) {
        throw new NegativeInput();
    }

    const [divisor1, divisor2] = divisors;
    if (divisor1 === 1 || divisor2 === 1) {
        throw new DivisorSetAt1();
    }

    if (divisor1 <= 0 || divisor2 <= 0) {
        throw new NegativeDivisor();
    }

    if (divisor1 === divisor2) {
        throw new SameDivisors();
    }

    let result = "";
    for (let i = 1; i <= num; i++) {
        if (i % divisor1 !== 0 && i % divisor2 !== 0) {
            result += i;
        }

        if (i % divisor1 === 0) {
            result += "Fizz";
        }

        if (i % divisor2 === 0 ) {
            result += "Buzz";
        }

        result += " ";
    }

    return result.trimEnd();
}