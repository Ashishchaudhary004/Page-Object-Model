import {Page} from '@playwright/test';

import {ProductLocator} from '../locator/ProductPageLocator';

export class ProductPage{

    constructor(private page: Page){

    }

    //method
    async LogutFunc(){
        await this.page.click(ProductLocator.settingIcon);
        await this.page.click(ProductLocator.logoutlink);
    }
    //method
    async aboutFunc(){
        await this.page.click(ProductLocator.settingIcon);
        await this.page.click(ProductLocator.aboutlink);
        //await this.page.waitForSelector(ProductLocator.bookDemobtn);

    }
}