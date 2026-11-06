
import { expect, test } from '../../src/fixtures/index';
import user from "../../src/test-data/user.json"


const password = process.env.USER_PASSWORD!

test('User can login sucessfully In English', { tag: ["@login","@smoke"] },async ({ loginReady, homePage }) => {
  await loginReady.loginUser(user.defaultUser.email,password);
  await homePage.UserSeeWelcomeMessage("Hi, testuser");
});

test.fixme('User cannot login with wrong credentials In English', { tag: ["@login", "@smoke"] }, async ({ page,loginReady }) => {
  // Skip de navegadores
  // test.skip( browserName !== "webkit", "Funcionalidad solo soportada por webkit")
  // Marcar un bug conocido
  await loginReady.loginUser(user.defaultUser.email,"wrong-password");
  await expect(page).toHaveURL("/login");
});