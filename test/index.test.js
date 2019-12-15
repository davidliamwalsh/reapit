const puppeteer = require('puppeteer');

test("page has content", async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  //await page.screenshot({path: 'index.png'})

  const intro = await page.$eval('[data-test=intro-head]', el => el.textContent)

  expect(intro).toEqual('Dear Ms Macarthur,')
  expect(intro).not.toEqual('abc')
})