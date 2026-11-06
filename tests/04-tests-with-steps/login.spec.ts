
import { expect, test } from '../../src/fixtures/index';
import user from "../../src/test-data/user.json"


const password = process.env.USER_PASSWORD!

test('User can login sucessfully In English', { tag: ["@step","@smoke"] },async ({ loginReady, homePage }) => {
    await test.step("Rellenar crendeciales", async () => {
        await loginReady.loginUser(user.defaultUser.email,password);
    });
    await test.step("Verificar Mensaje de Bienvenida de usuario", async () => {
        await homePage.UserSeeWelcomeMessage("Hi, testuser");
    });
});
