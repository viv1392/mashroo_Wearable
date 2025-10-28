const{BasePage}=require('../pageObjects/basePage')

class AccountCrationPage extends BasePage{
    constructor(page){
        super(page)
         this.firstName ='#first_name';
         this.lastName ='#last_name';
        this.email='#email';
        this.password='#password'
        this.creatAccount='//div[@class="lightly-spaced-row-above"]/button';
    }
    async accountCreationDetails(firstName,lastName,Email,Password){
        await this.fillElement(this.firstName,firstName)
        await this.fillElement(this.lastName,lastName)
        await this.fillElement(this.email,Email)
        await this.fillElement(this.password,Password)
        await this.clickElement(this.creatAccount);
    }
}
module.exports={AccountCrationPage}