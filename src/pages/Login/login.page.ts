import { Page } from "@playwright/test";



export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email: string) {
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    }

    async fillPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    }

    async clickSubmitButton(){
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }

    async loginUser(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickSubmitButton();
    }

}