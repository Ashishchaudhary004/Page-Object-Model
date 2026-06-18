import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  //reporter: 'allure-playwright',

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }], // Interactive HTML report
    ['allure-playwright', { detail: true, outputFolder: 'allure-results' }] // Allure raw data
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

   // browserName: 'chromium', //use chrome browser to run
    //channel: 'chrome', 
    headless: true, //to run in head mode
    // ensure launchOptions is explicit so headful windows open reliably
    launchOptions: {
      // slowMo helps visually observe browser actions
      slowMo: 1000,
      
    },
    screenshot: 'on', //take screeen shot each and every test
    trace: 'on' // this is log info in details
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'],
        headless: true,
      },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
