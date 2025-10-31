class BasePage{
        
    constructor(page){
        this.page=page;
    }

    async naviagteTo(url){
        await this.page.goto(url);
       // await this.page.waitForLoadState('networkidle');
    }

    async clickElement(locator){
        await this.page.click(locator);
    }

    async fillElement(locator,text){
        await this.page.fill(locator,text);
    }

    async getElementText(locator){
        return await this.page.textContent(locator)
    }
    async getElements(locator){
        return await this.page.$$(locator);
    }
    async getAllElementsText(selector) {
        try {
            const elements = await this.page.$$(selector);
            const texts = [];

            for (const element of elements) {
                const text = (await element.innerText()).trim();
                texts.push(text);
            }

            return texts;

        } catch (error) {
            console.error(`Error while getting text for selector: ${selector}`, error);
            return [];
        }
    }
    async clickElementByText(selector, targetText) {
        const elements = await this.page.$$(selector);
        let isClicked = false;

        for (const element of elements) {
            const text = (await element.innerText()).trim();
            
            if (text.toLowerCase().includes(targetText.toLowerCase())) {
                await element.click();
                console.log(`✅ Clicked on element with text: ${text}`);
                isClicked = true;
                break;
            }
        }

        if (!isClicked) {
            throw new Error(`❌ No element found with text: ${targetText}`);
        }
    }



    async mouseHover(locator){
        await this.page.hover(locator);
    }
   

    async waitingTimeout(){
        await this.page.waitForTimeout(4000);
    }

}

module.exports={BasePage};