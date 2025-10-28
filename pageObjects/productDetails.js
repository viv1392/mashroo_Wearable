const { BasePage } = require("./basePage");

class ProductSelectionDetails extends BasePage{
    constructor(page){
        super(page);
        this.size='.js-value';
        this.qntity='#quantity';
        this.cartButton='//button[@class="btn btn--large add-to-cart"]';
    }
    async productDetails(){
        const sizes=await this.getElement(this.size);
        console.log(sizes);
        for(const sze of sizes){
           const szeall= await this.getElementText(sze);
           console.log(szeall);
        }

    }
}
module.exports={ProductSelectionDetails};