export class CustomError extends Error{
    public readonly message: string;
    public readonly httpCode: number;

    constructor(message: string, httpCode: number){
        super(message)

        this.message = message
        this.httpCode = httpCode

        Error.captureStackTrace(this)
    }
}