import { expect, Page } from "@playwright/test";



export class HomePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async UserSeeWelcomeMessage(message: string) {
        await expect(this.page.getByRole('heading', { name: 'Hi, testuser' })).toHaveText(message);
    }

}