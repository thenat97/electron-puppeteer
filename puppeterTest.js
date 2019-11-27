"use strict";
const { puppeteer } = require('puppeteer');

async function createScreenshot() {
  console.log('puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1600,
    height: 900});
    await page.goto('https://www.youtube.com/');
    await page.screenshot({path: 'example.png'});
    await browser.close();
  }

  exports.createScreenshot = createScreenshot;
