import { APIRequestContext, request } from '@playwright/test';

export class AgifyClient {
    private apiContext!: APIRequestContext;

    async init() {
        this.apiContext = await request.newContext();
    }

    async getAge(name: string) {
        const response = await this.apiContext.get(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
        return response;
    }
}