// import { test } from '@playwright/test';
// import user from "../src/test-data/user.json"
// import { LoginPage } from '../src/pages/Login/login.page';
// import { HomePage } from '../src/pages/Home/home.page';
// import { ModalCookies } from '../src/components/ModalCookies/ModalCookies';

// test('User can login sucessfully In English', async ({ page }) => {
//   const login = new LoginPage(page);
//   const home = new HomePage(page);
//   const modalCookies = new ModalCookies(page);
//   await page.goto('/login');
//   await modalCookies.clickToAcceptModalCookies();
//   await login.loginUser(user.defaultUser.email,user.defaultUser.password);
//   await home.UserSeeWelcomeMessage("Hi, testuser");
// });

// Test con Fixtures
// import { test } from '../src/fixtures/index';
// import user from "../src/test-data/user.json"

// test('User can login sucessfully In English', async ({ page,modalCookies, loginPage, homePage }) => {
//   await page.goto('/login');
//   await modalCookies.clickToAcceptModalCookies();
//   await loginPage.loginUser(user.defaultUser.email,user.defaultUser.password);
//   await homePage.UserSeeWelcomeMessage("Hi, testuser");
// });


// Test con variables de entorno
import { test } from '../src/fixtures/index';
import user from "../src/test-data/user.json"

// const password = {
//   admin: process.env.ADMIN_PASSWORD!,
//   user: process.env.USER_PASSWORD!,
// }

const password = process.env.USER_PASSWORD!

test('User can login sucessfully In English', async ({ page,modalCookies, loginPage, homePage }) => {
  await page.goto('/login');
  await modalCookies.clickToAcceptModalCookies();
  await loginPage.loginUser(user.defaultUser.email,password);
  await homePage.UserSeeWelcomeMessage("Hi, testuser");
});