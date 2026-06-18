import { Page } from "@playwright/test"; 
import { CartLocator } from "../locator/CartLoc";

export class CartPage{

    constructor(private page: Page){}

    async cartfunc(){
        await this.page.click(CartLocator.addToCart);
    }
    async addCart(){
        await this.page.click(CartLocator.cartLocator);
    }
    async checkout(){
        await this.page.click(CartLocator.checkoutLocator);
    }
    async checkoutDetails(firstname:string,lastname:string,postcode:string){
        await this.page.fill(CartLocator.firstnameLocator,firstname);
        await this.page.fill(CartLocator.lastnameLocator,lastname);
        await this.page.fill(CartLocator.postcodeLocator,postcode);
        await this.page.click(CartLocator.continueLocator);
    }
    async finish(){
        await this.page.click(CartLocator.finish);
    }

}