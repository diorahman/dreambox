/** The base extensible error class */
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

/** Wraps Dreambox errors */
class DreamboxError extends BaseError {
    constructor(message, code, source = 'Dreambox') {
        // Hence we know which place is failing by just reading the message
        super(`${message} (${code} of ${source})`);
        this.code = code;
        this.source = source;
        this.name = this.constructor.name;
    }
}

export { DreamboxError };
