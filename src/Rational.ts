/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    normalize(): Rational {
        const gcd = (a: number, b: number): number => {
            return b === 0 ? a : gcd(b, a % b);
        };
        const divisor = gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / divisor, this.denominator / divisor);
    }

    equals(other: Rational): boolean {
        const r1 = this.normalize();
        const r2 = other.normalize();
        return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
    }

    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    static parseRational(str: string): Rational {
        const parts = str.split("/");
        if (parts.length !== 2) {
            throw new Error("Invalid Rational format");
        }
        const numerator = parseInt(parts[0], 10);
        const denominator = parseInt(parts[1], 10);
        return new Rational(numerator, denominator);
    }

    static _parseRational(numeratorArr: string[], denominatorArr: string[]): Rational {
        const numerator = parseInt(numeratorArr.join(""), 10);
        const denominator = parseInt(denominatorArr.join(""), 10);
        return new Rational(numerator, denominator);
    }
}