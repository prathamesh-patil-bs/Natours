const puppeteer = require("puppeteer");

const sleep = (sec) =>
  new Promise((res) => setTimeout(() => res(true), 1000 * sec));

async function start() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { height: 1080, width: 1920 },
  });

  const page = await browser.newPage();

  await page.goto(
    "https://djpunjab.is/single-track/see-my-hype-roop-bhullar-mp3-song-303630.html"
  );

  await sleep(5);

  await page.click('a[href="https://s320.djpunjab.is/data/320/54937/303630/SEE MY HYPE - Roop Bhullar.mp3"]');

  
  await sleep(25);

  await page.close();
  await browser.close();
}

start();
