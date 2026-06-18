import { Locator } from "../locator/Locator";
import { Page } from "@playwright/test";


export class LoginPage {

    constructor(private page: Page) {

    }
    async navigate(url: string) {
        await this.page.goto(url);
    }

    async login(userName: string, password: string) {
        await this.page.fill(Locator.usernameInp, userName);
        await this.page.fill(Locator.passwordInp, password);
        await this.page.click(Locator.loginButton);
    }
     async getErrorMessage() {
        return this.page.locator(Locator.errormsg).innerText();
    }


}