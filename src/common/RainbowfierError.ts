export class RainbowfierError extends Error {
    constructor(message: string, nameOfOrigin: string) {
        super(`[Rainbowfy] ${nameOfOrigin}: ${message}`);
        Object.setPrototypeOf(this, RainbowfierError.prototype);
    }
}