import { test, expect } from '@playwright/test';

import { BASE_URL, USERNAME, PASSWORD } from '../utils/envConfig';
import { ProductPage } from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';
import { Locator } from '../locator/Locator';
import { ProductLocator } from '../locator/ProductPageLocator';

test.describe('Product Page Test', () => {
    let loginpage: LoginPage
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        productPage = new ProductPage(page);
        await page.goto(BASE_URL);
        await loginpage.login(USERNAME, PASSWORD);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    })

    test('Logout Functionality', async ({ page }) => {
        await productPage.LogutFunc();
        //validte login is display

        await expect(page.locator(Locator.loginButton)).toBeVisible();
    })

    test('About FUnctionality', async ({ page }) => {
        await productPage.aboutFunc();

        await expect(page.getByRole('link', { name: 'Book a Demo', exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Try it free' })).toBeVisible();

        await page.goBack();
        await expect(page.locator(ProductLocator.settingIcon)).toBeVisible();
    })
})