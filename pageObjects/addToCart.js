const { BasePage } = require("./basePage");

class AddToCart extends BasePage {
    constructor(page){
        super(page);
        this.size='//label[3]/span';
        this.quantity='#quantity';
        this.cartButton='//button[@class="btn btn--large add-to-cart"]';
    }
    async addToCart(quantities){
        await this.clickElement(this.size);
        await this.fillElement(this.quantity,quantities);
        await this.clickElement(this.cartButton);
       // await this.waitingTimeout();
        
    }
}
module.exports={AddToCart};