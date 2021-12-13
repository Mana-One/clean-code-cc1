import { Divisors, DivisorSetAt1, fizzbuzz, NegativeDivisor, NegativeInput, SameDivisors } from "../src/fizzbuzz";

describe("Fizzbuzz", () => {
    describe("when using divisor couple (3,5)", () => {
        const divisors: Divisors = [3, 5];

        it("should print only the numbers when none are multiples of 3 or 5", () => {
            expect(fizzbuzz(divisors, 2)).toEqual("1 2");
        });
    
        it("should replace multiples of 3 by 'Fizz'", () => {
            expect(fizzbuzz(divisors, 3)).toBe("1 2 Fizz");
        });
    
        it("should replace multiples of 5 by 'Buzz", () => {
            expect(fizzbuzz(divisors, 5)).toBe("1 2 Fizz 4 Buzz");
        });
    
        it("should replace multiples of 15 by 'FizzBuzz'", () => {
            expect(fizzbuzz(divisors, 15)).toBe("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
        });
    
        it("should throw a NegativeInput error when the value is 0 or negative", () => {
            expect(() => fizzbuzz(divisors, -42)).toThrowError(NegativeInput);
        });
    });

    describe("when using any couple", () => {
        it("should replace multiples of the first divisor by 'Fizz'", () => {
            const divisors: Divisors = [2, 5];
            expect(fizzbuzz(divisors, 3)).toBe("1 Fizz 3");
        });

        it("should replace multiples of the second divisor by 'Buzz'", () => {
            const divisors: Divisors = [3, 7];
            expect(fizzbuzz(divisors, 15)).toBe("1 2 Fizz 4 5 Fizz Buzz 8 Fizz 10 11 Fizz 13 Buzz Fizz");
        });

        it("should throw a DivisorSetAt1 error when one of the divisors is 1", () => {
            const divisors: Divisors = [1, 2];
            expect(() => fizzbuzz(divisors, 3)).toThrowError(DivisorSetAt1);
        });

        it("should throw a NegativeDivisor error when one of the divisors is negative", () => {
            const divisors: Divisors = [-2, 5];
            expect(() => fizzbuzz(divisors, 3)).toThrowError(NegativeDivisor);           
        });

        it("should throw a SameDivisors error when passing the same divisor twice", () => {
            const divisors: Divisors = [2, 2];
            expect(() => fizzbuzz(divisors, 3)).toThrowError(SameDivisors);           
        });
    });
});