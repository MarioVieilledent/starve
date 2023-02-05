/**
 * Concat functions execution
 */
export const concat = (...args: any) => {
    if (args.length > 0) {
        args[0]();
        args.shift();
        concat(...args)
    }
}