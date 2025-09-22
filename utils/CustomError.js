class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.statusCode = status;

        // status is assigned based on status code range
        const portNumberRange = parseInt(status / 100);

        this.status = portNumberRange === 5 ? "server error"
        : portNumberRange === 4 ? "fail- client error"
                : portNumberRange === 3 ? "Redirection"
                    : portNumberRange === 2 ? "Success"
                        : portNumberRange === 1 ? "Informational"
                            : "something is rong plz check you code i am from error";


        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = CustomError;