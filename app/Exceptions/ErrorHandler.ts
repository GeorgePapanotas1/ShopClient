import { ClientInternalError } from '~/app/Exceptions/ClientInternalError';
import { NotFoundException } from '~/app/Exceptions/NotFoundException';

export class ErrorHandler {
    static handleError(e: Error) {
        if (e instanceof NotFoundException) {
            throw new NotFoundException('The requested resource was not found!', 404);
        }

        throw new ClientInternalError(e.message, 500);
    }
}