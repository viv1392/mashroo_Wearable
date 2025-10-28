const{BasePage}=require('../pageObjects/basePage');

  class HomePage extends BasePage{
    constructor(page){
        super(page);
        this.accountIcon="//span[@class='header-account-link__icon']";
        this.products='.product-block__title';
    }

    async navigateToHomePage(urlDomain){
        await this.naviagteTo(urlDomain);
    }
    async accountEmojiIcon(){
        await this.clickElement(this.accountIcon);
        

    }
    async productSelection(kurta){
        await this.clickElementByText(this.products,kurta);
        await this.waitForTimeout(3000);
      

    }



}
module.exports={HomePage};