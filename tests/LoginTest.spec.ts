import {test,expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';

import {BASE_URL, USERNAME, PASSWORD, INVALID_USERNAME, INVALID_PASSWORD} from '../utils/envConfig';

test.describe('Login Test', () => {
    test('Login Test with valid credentials', async({page})=>{

    const loginPage=new LoginPage(page);
    await page.goto(BASE_URL);

    await loginPage.login(USERNAME, PASSWORD);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    }),
    test('Login Test with invalid credentials', async({page})=>{

        const loginPage=new LoginPage(page);
        await page.goto(BASE_URL); 
        
        await loginPage.login(INVALID_USERNAME, INVALID_PASSWORD);
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    })

})