import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    constructor(private logger: NGXLogger) {
    }

    logErrorMessage(errorMsg: string): void {
        this.logger.error(errorMsg);
    }

    getErrorMessage(error): string {
        let errorMsg: string;

        return error.error instanceof ErrorEvent
            ? `Error: ${error.error.message}`
            : this.getServerErrorMessage(error);
    }

    getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error: ${error.message}`;
            }
        }
    }
}
