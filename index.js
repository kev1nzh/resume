const puppeteer = require("puppeteer");


const start = async () => {
    const browser = await puppeteer.launch(
        { headless: false },
        { args: ["--disable-dev-shm-usage", "--full-memory-crash-report"] }
      );
      const page = await browser.newPage();
      await page.setViewport({
        width: 1500,
        height: 900
      });
      
      await page.goto(
        "file:///Users/zl/Desktop/interview/resume-gh-pages/index.html"
      );
      await page.waitFor(2000);
      
      await page.screenshot({ path: `resume.pdf` });
      page.close();
      
      browser.close();
}



start().then(e => {
    console.log('ok')
})