const puppeteer = require('puppeteer')

async function scrapeProduct (url) {
    const browser= await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)


    const [el] = await page.$x('//*[@id="landingImage"]')
    const src = await el.getProperty('src')
    const imageUrl = await src.jsonValue()

    const [el2] = await page.$x('//*[@id="title"]')
    const txt = await el2.getProperty('textContent')
    const title = await txt.jsonValue() 
    //trim new line
    const trimTitle = await title.replace(/\n/g ,"")
   // console.log(trimTitle);

    const [el3] = await page.$x('//*[@id="price_inside_buybox"]')
    const txt2 = await el3.getProperty('textContent')
    const price = await txt2.jsonValue()
    const trimPrice = await price.replace(/\n/g ,"")
    console.log(trimPrice);

   console.log({trimTitle, imageUrl, trimPrice});
  




    browser.close()

}

scrapeProduct('https://www.amazon.com/Apple-MacBook-13-inch-512GB-Storage/dp/B08N5M9XBS/ref=sr_1_1?dchild=1&keywords=apple+air&qid=1615136829&sr=8-1')