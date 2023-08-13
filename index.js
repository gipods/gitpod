const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://gitpod.io/workspaces');
    
    // Set the cookies
    const cookies = [
            { name: 'gp-necessary', value: 'true' },
            { name: 'gitpod-user', value: 'true' },
            { name: '__stripe_mid', value: '5a9e5c72-ac3e-4b02-a028-bfacd2faef820f55c7' },
            { name: '_gitpod_io_ws_9b17eaa3-2c63-4b07-9352-b4772349a0ed_owner_', value: '75c6WDcAXxf2cCJ50IO-hmMETLDUzErP' },
            { name: 'GCLB', value: 'CMapsb61t6y4Kw' },
            { name: '_gitpod_io_ws_fe041f0a-7ffd-41c4-a599-7277a681a523_owner_', value: 'JkvLmlIf4q9vk8Zl1W1Cd9KcV5KrMMfW' },
            { name: '_gitpod_io_ws_fe1c8494-bb98-4367-8c62-cafe4e234118_owner_', value: 'rH_i77Pfo.8UL4kE8Ec_zHs2JTUZAkgP' },
            { name: '_gitpod_io_ws_c10823bc-0297-4618-9045-03830037c33a_owner_', value: 'e6nRZraKbcVw19ZwGyF.81Zx6grWRyf5' },
            { name: '_gitpod_io_jwt_', value: 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE2OTE3NzY2ODUsImV4cCI6MTY5MjM4MTQ4NSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiJlZTIwMWE4Ni1iMjZlLTQ5ZTEtYWU3MS1kYTdjODdmZGE5NGMifQ.e6oec4_kP0HFzV6o8k4lWA2ynD_GTGNQFtjA5k3AY-X6Vom4iRqiHUQg0xZ4xIn2uYgZ0VAY44768zR-EgshPHpVEXVnxGx4RFCcBxku8OT6FdYBF9IcaxTsJuhkFj_nVt2JU6bNnMzFmaPtzwkX3QC4vy571TEWK15r3-qIOA4iOzdLQhi-5ICfTSgohRL2qh8mJFqyPkd8qWvAy8opnpC9vhFgn8F32cJeiDFR-0BEXZrzKAhObuB5PfSukEbDT7kiLrikMlgmHpuFitDCRb7fkpWWjeNOamsGUhKTjw5tmzYwWPYuJA_OvH6bNHTijjfnbFWAQSd1rlk3n2E2pLLjTuao0EBX8zbLStS2WweG4NMLP49knH_YsgsVVI7X90KWayyPepBc_PbFosr2AjOecXVFLdqgs23HUhdAx8g03QD8wTcAEtF-O69HmpThiRjSuRnP6LOcGiHFGqIBtjzZJXQlWleccOtbailtjWyesGuaEmDDFu_WJxTIDujBInp4psDqUqe-cf5RT5plrFaC65QSZti1yhqe0J75jzOTuqmf2GJyf2iM2GITOGmH0yOYsnmsXO3mfR9T-d98CtN1tPM0n4zkk5QVr5LmVegC7iidaRgfG1t-iBRVM6K7urDWeupilur1XXgwVEZaVEtWLoNRxq0AG2NRIUz2ES8'}
    ];
    for (const cookie of cookies) {
        await page.setCookie(cookie);
    }
	console.log("cookie set")
  // Wait for the selector to appear
    await page.waitForSelector('img[alt="Fekerineamar"]');
    console.log('Selector found, login successful');

  // Open a new tab and visit the start page
    const newPage = await browser.newPage();
    await newPage.goto('https://gitpod.io/start/#community-community-uhqpyuds20a');
    await page.waitForNavigation(); 
    console.log("started success")
    await page.deleteCookie();
    await browser.close();
})();
