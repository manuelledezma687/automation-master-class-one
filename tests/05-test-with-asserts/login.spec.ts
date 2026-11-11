
import { expect, test } from '../../src/fixtures/index';
import user from "../../src/test-data/user.json"


const password = process.env.USER_PASSWORD!


test('User can see the login page with soft assertion', { tag: ["@soft"] }, async ({ page }) => {
  const submit = page.getByRole('button', { name: 'Log in' });
  await page.goto("/login");
  await expect(submit).toBeHidden();
  await expect(submit).toBeEnabled();
  await expect(page).toHaveURL("/login");
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
});

test('User can see the login page with normal assertion', { tag: ["@hard"] }, async ({ page }) => {
  const submit = page.getByRole('button', { name: 'Log in' });
  await page.goto("/login");
  await expect(submit).toBeHidden();
  await expect(submit).toBeEnabled();
  await expect(page).toHaveURL("/login");
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
});