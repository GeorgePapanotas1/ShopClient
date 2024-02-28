export class NotFoundException extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message); // Pass the error message to the base Error class

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotFoundException.prototype);

        this.statusCode = statusCode; // Custom property to hold the status code
        this.name = this.constructor.name; // Set the error name to the class name

        // Captures the stack trace (for debugging purposes), excluding the constructor call from it.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}