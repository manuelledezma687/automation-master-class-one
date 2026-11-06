import { ModalCookies } from '../../src/components/ModalCookies/ModalCookies';
import { expect, test } from '../../src/fixtures/index';
import user from "../../src/test-data/user.json"

// const password = {
//   admin: process.env.ADMIN_PASSWORD!,
//   user: process.env.USER_PASSWORD!,
// }

const password = process.env.USER_PASSWORD!

test.describe("Login with Hooks",() => {

  test.beforeAll( async ({ browserName }) => {
    console.log(`[beforeAll]::::::Arrancando suite en -> ${browserName}`);
  });

  test.afterEach( async ({ browserName },testInfo) => {
    console.log(`[afterEach]::::::Test ${testInfo.title} Terminado en navegador ${browserName}`);
  });

  test.afterAll( async () => {
    console.log(`[afterAll]::::::Suite terminada`);
  });

  // hooks n1
  // test.beforeEach( async ({ page, modalCookies }) => {
  //   await page.goto('/login');
  //   await modalCookies.clickToAcceptModalCookies();
  // });

  // hooks n2
    test.beforeEach( async ({ page, modalCookies}, testInfo) => {
    console.log(`[beforeEach]:::::: -> ${testInfo.title}`)
    await page.goto('/login');
    await modalCookies.clickToAcceptModalCookies();
  });

test('User can login sucessfully In English', async ({ loginPage, homePage }) => {
  await loginPage.loginUser(user.defaultUser.email,password);
  await homePage.UserSeeWelcomeMessage("Hi, testuser");
});

test('User cannot login with wrong credentials In English', async ({ page,loginPage }) => {
  await loginPage.loginUser(user.defaultUser.email,"wrong-password");
  await expect(page).toHaveURL("/login");
});


});
