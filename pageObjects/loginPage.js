const{BasePage}=require('../pageObjects/basePage')
class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.registrationClick="//*[@id='customer_login']/div[3]/div/a";
        this.emailId='#customer_email';
        this.pwd='#customer_password';
        this.signInButton='//div[@class="opposing-items"]/button';
    }

    async accountCreationLink(){
        await this.clickElement(this.registrationClick);
    }
    async accountLogin(email,password){
        await this.fillElement(this.emailId,email);
        await this.fillElement(this.pwd,password);
        await this.clickElement(this.signInButton);
    }

}
module.exports={LoginPage};