import { test as base } from '@playwright/test';
import { ModalCookies } from "../components/ModalCookies/ModalCookies";
import { HomePage } from "../pages/Home/home.page";
import { LoginPage } from "../pages/Login/login.page"


type PageFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    modalCookies: ModalCookies;
}

export const test = base.extend<PageFixtures>(

    {
        loginPage: async({page}, use) => {
            await use(new LoginPage(page));
        },
         homePage: async({page}, use) => {
            await use(new HomePage(page));
        },
        modalCookies: async({page}, use) => {
            await use(new ModalCookies(page));
        },
    }
);

export { expect } from '@playwright/test';