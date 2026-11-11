import { createBdd } from "playwright-bdd";
import { expect, test } from '../../src/fixtures/index';
import { DataTable } from "playwright-bdd";
import user from "../../src/test-data/user.json"

export const { Given, When, Then, Before, After } = createBdd(test);

type Role = 'textbox'| 'button';


Before({ tags: '@login'}, async({ $testInfo }) => {
    console.log(`[BDD Before] ${$testInfo.title}`)
});

After( async({ page, $testInfo }) => {
    if ($testInfo.status !== $testInfo.expectedStatus ) {
      await $testInfo.attach('failure', { body: await page.screenshot(), contentType: 'image/png'});
    }
});


Given('I am on the login page', async ({ page }) => {
  await page.goto("/login");
});

Given('I accept the cookies', async ({ modalCookies }) => {
  await modalCookies.clickToAcceptModalCookies();
});

When('I log in as the default user', async ({ loginPage }) => {
   await loginPage.loginUser(user.defaultUser.email,process.env.USER_PASSWORD!);
});

Then('I see the welcome message {string}', async ({ homePage }, message: string) => {
   await homePage.UserSeeWelcomeMessage(message);
});

When('I log in as a user without an account', async ({ loginPage }) => {
   await loginPage.loginUser('noexiste@gmail.com','xxxxx');
});

Then('I stay on the login page', async ({ page }) => {
  await expect(page).toHaveURL("/login");
});

When('I log in with email {string} and password {string}', async ({ loginPage }, email: string, password: string) => {
   await loginPage.loginUser(email,password);
});

Then('the login page matches the baseline', async ({ page }) => {
   await expect(page).toHaveScreenshot('bdd-login.png', { fullPage: true, animations: 'disabled'});
});

Then('I see the following fields:', async ({page}, table: DataTable) => {
  for ( const row of table.hashes()) {
    await expect.soft(page.getByRole( row.role as Role, { name : row.name } )).toBeVisible();
  }
});
