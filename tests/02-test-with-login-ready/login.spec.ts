
import { test } from '../../src/fixtures/index';
import user from "../../src/test-data/user.json"


const password = process.env.USER_PASSWORD!

test('User can login sucessfully In English', async ({ loginReady, homePage }) => {
  await loginReady.loginUser(user.defaultUser.email,password);
  await homePage.UserSeeWelcomeMessage("Hi, testuser");
});