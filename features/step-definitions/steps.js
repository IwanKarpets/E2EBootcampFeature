const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(`Open the home page`, async () => {
  await browser.url(`https://www.newegg.com`);
});

//if we have modal popup
// When(`Close the promo banner if it appears`, async () => {
//   const modalElem = await $('some selector');
//   await expect(modalElem).isDisplayed();
//   await browser.refresh();
// });

// It's for Search bar scenario
When(`Entry the word "Windows" in the search bar`, async () => {
  const searchBar = await $('div.header2021-search-box.auto-flex > input[type=search]');
  await searchBar.setValue('Windows');
});

When(`Click the search`, async () => {
  const button = await $(
    '#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button > button',
  );

  await button.click();
});

Then(`Check that at least one item appears`, async () => {
  const item = await $('.item-cell');
  await expect(item).toBeExisting();
});

// It's for Internet shop logo button scenario

When(`Open "Today's Best Deals" tab`, async () => {
  const tabElem = await $('//*[@id="trendingBanner_720202"]');
  await tabElem.click();
});

When(`Click on the Internet shop logo`, async () => {
  const elemLogo = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a');
  await elemLogo.click();
});

Then(`Check that the main page opened`, async () => {
  await browser.url(`https://www.newegg.com`);
});
