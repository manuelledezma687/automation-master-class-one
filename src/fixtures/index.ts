import { test as base } from 'playwright-bdd';
// import { test as base } from '@playwright/test';  para activar playwright normal descomentar esta linea y comentar la de arriba
import { ModalCookies } from "../components/ModalCookies/ModalCookies";
import { HomePage } from "../pages/Home/home.page";
import { LoginPage } from "../pages/Login/login.one.page"


type PageFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    modalCookies: ModalCookies;
    loginReady: LoginPage;
    logtime: void
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
        loginReady: async({page,modalCookies, loginPage}, use) => {
            await page.goto('/login');
            await modalCookies.clickToAcceptModalCookies();
            await use(loginPage);
        }, 
        logtime: [ async({}, use, testInfo) => {
            const inicio = Date.now();
            await use();
            console.log(` ${testInfo.title}: ${Date.now() - inicio} ms`);
        }, { auto: true} ],
    }
);

export { expect } from '@playwright/test';