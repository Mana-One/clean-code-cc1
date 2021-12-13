import { Divisors, fizzbuzz } from "./fizzbuzz";

function main(): void {
    const args = process.argv;

    if (args.length === 3) {
        console.log(fizzbuzz(undefined, parseInt(args[2])));
    }

    if (args.length === 4) {
        const divArgs = args[2].split(",").map(parseInt);
        const divisors: Divisors = [divArgs[0], divArgs[1]];
        console.log(fizzbuzz(divisors, parseInt(args[3])));
    }
}

main();