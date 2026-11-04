import { Page } from "@playwright/test";



export class ModalCookies {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickToAcceptModalCookies() {
        await this.page.getByRole('button', { name: 'Accept and continue' }).click();
    }
}