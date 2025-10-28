const{test,expect}=require('@playwright/test');
const {HomePage} = require('../pageObjects/homePage');
const{LoginPage}=require('../pageObjects/loginPage');
const{registrationData,siteUrl,loginData}=require('../testData/Testdata');
const {AccountCrationPage}=require('../pageObjects/accountPage')
const{HomeDashBoard}=require('../pageObjects/homeDashBoard');
const{ProductSelectionDetails}=require('../pageObjects/productDetails');


test.describe.serial('Wearable Test Suite', () => {

  test.beforeEach('Home Page  login/registration button click',async({page})=>{
    const homePage=new HomePage(page);
    await homePage.navigateToHomePage(siteUrl.site);
    
    

  });

    registrationData.forEach((data,index)=> {
    test.skip(`Registration Test- Dataset ${index + 1}`, async ({page}) => {
      
        const loginPage=new LoginPage(page);
        const accountPage=new AccountCrationPage(page);
       
       
        await loginPage.accountCreationLink();
        await accountPage.accountCreationDetails(data.fN,data.lN,data.email,data.pwd);
        

     });
    });

    test.skip('Login test',async({page})=>{
      const loginPage=new LoginPage(page);
      const homeDashBoard=new HomeDashBoard(page);
      const productDeatils=new ProductSelectionDetails(page);

      let selectedKurta='Tunban Pathani White for Men';

      await loginPage.accountLogin(loginData.email,loginData.pwd);
      await homeDashBoard.menLinkHover();
      await homeDashBoard.kurtaSelction(selectedKurta);
      await productDeatils.productDetails();
      

    });

    test('Product selection from home Page',async({page})=>{
        const homePage=new HomePage(page);

        let desiredProduct='Kurvig Omani Thobe Maroon For Men';
        await homePage.productSelection(desiredProduct);

    });
});