/**
 * @file baseConversion.ts
 */

/**
 * Stack class to hold the remainders.
 */
class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

/**
 * Convert a base-10 number to any other base.
 * @param {number} num - The base-10 number to convert.
 * @param {number} base - The base to convert to.
 * @returns {string} - The number in the new base.
 */
export function baseConversion(num: number, base: number): string {
    const stack = new Stack<number>();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    if (base < 2 || base > 36) {
        return 'Base out of range';
    }

    while (num > 0) {
        stack.push(num % base);
        num = Math.floor(num / base);
    }

    while (!stack.isEmpty()) {
        result += digits[stack.pop() as number];
    }

    return result;
}
