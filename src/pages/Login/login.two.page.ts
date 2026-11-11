import { Page } from "@playwright/test";
import { loginLocators as L } from "./locators";


export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email: string) {
        await this.page.locator(L.emailInput).fill(email);
    }

    async fillPassword(password: string) {
        await this.page.locator(L.passwordInput).fill(password);
    }

    async clickSubmitButton(){
        await this.page.locator(L.submitButton).click();
    }

    async loginUser(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickSubmitButton();
    }

}