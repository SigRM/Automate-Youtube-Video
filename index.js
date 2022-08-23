const puppeteer = require('puppeteer');

function main(){
    automateSearch();
}

async function automateSearch(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.setViewport({width: 1288, height:800});
    await page.goto('https://youtu.be/PS5vBJELtj4'); 
    await page.click('button.ytp-play-button.ytp-button');

   
    
}

main()