import { Page, expect, test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { ProductLocator } from "../locator/ProductPageLocator";
import { Locator } from "../locator/Locator";
import { ProductPage } from "../pages/ProductPage";
import { CartLocator } from "../locator/CartLoc";
import { CartPage } from "../pages/CartPage";
import { BASE_URL, USERNAME, PASSWORD } from "../utils/envConfig";
import  testData  from "../data/test-data.json";

test.describe("Cart Page test", async () => {
    let loginpage: LoginPage;
    let Productpage: ProductPage;
    let cartpage: CartPage;

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        Productpage = new ProductPage(page);
        cartpage = new CartPage(page);

        await page.goto(BASE_URL);
        await loginpage.login(USERNAME, PASSWORD);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    })
    test("Test the cart functionality", async({page})=>{
        await cartpage.cartfunc();
        expect(page.locator(CartLocator.removelocator)).toBeVisible();
        expect(page.locator(CartLocator.pricelocator)).toHaveText('$29.99');
        await cartpage.addCart();
        expect(page.locator(CartLocator.choseProductLocator)).toHaveText('Sauce Labs Backpack');
        expect(page.locator(CartLocator.checkoutLocator)).toBeVisible();
        await cartpage.checkout();

        await cartpage.checkoutDetails(
            testData.UserDetails.firstname,
            testData.UserDetails.lastname,
            testData.UserDetails.postalcode
        );
        await cartpage.finish();
        expect(page.locator(CartLocator.thankyouLocator)).toHaveText('Thank you for your order!');
       
    })

})