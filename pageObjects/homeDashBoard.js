const { BasePage } = require("./basePage");

class HomeDashBoard extends BasePage{
    constructor(page){
    super(page);
    this.menLink='//*[@id="proxy-nav"]/div/ul/li[2]';
    this.pathaniSuit='//*[@id="NavigationTier2-2"]/div/ul/li[3]';
    this.kurtasTitle='//*[text()="Tunban Pathani White for Men"]';
  }
  async menLinkHover(){
    await this.mouseHover(this.menLink);
    await this.clickElement(this.pathaniSuit);
  }
  async kurtaSelction(desiredKurta){
   const kurta= await this.getElementText(this.kurtasTitle)
   console.log(kurta);
   if(kurta==desiredKurta){
     await this.clickElement(this.kurtasTitle);
   }
   await this.waitForTimeout(4000);
    
   
  }
}
module.exports={HomeDashBoard};