import { ModalCookies } from '../../src/components/ModalCookies/ModalCookies';
import { expect, test } from '../../src/fixtures/index';
import user from "../../src/test-data/user.json"


const password = process.env.USER_PASSWORD!

test.describe("Login page with snapshots",() => {

  test.beforeAll( async ({ browserName }) => {
    console.log(`[beforeAll]::::::Arrancando suite en -> ${browserName}`);
  });

  test.afterEach( async ({ browserName },testInfo) => {
    console.log(`[afterEach]::::::Test ${testInfo.title} Terminado en navegador ${browserName}`);
  });

  test.afterAll( async () => {
    console.log(`[afterAll]::::::Suite terminada`);
  });


    test.beforeEach( async ({ page, modalCookies}, testInfo) => {
    console.log(`[beforeEach]:::::: -> ${testInfo.title}`)
    await page.goto('/login');
    await modalCookies.clickToAcceptModalCookies();
  });

test('Visual: Login Page', async ({ page }) => {
  await expect(page).toHaveScreenshot("login.png");
});

test('Visual: Login Page without Button', async ({ page }) => {
  await expect(page).toHaveScreenshot("login-button.png", {
    fullPage: true,
    animations:'disabled',
    mask: [ page.locator('//button[@type="submit"]')],
  });
});

test('Visual: Form structure', async ({ page }) => {
  await expect(page.locator('form').first()).toMatchAriaSnapshot(`
    - textbox "Email"
    - textbox "Password"
    - button "Log in"
    `);
});


});
