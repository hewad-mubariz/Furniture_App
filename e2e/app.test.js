import * as utils from './utils';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should tap on a every tab', async () => {
    await utils.tapAndWait('tabCart');
    await utils.tapAndWait('tabFavourites');
    await utils.tapAndWait('tabProfile');
    await utils.tapAndWait('tabHome');
  });
  it('should tap on a every filter chip', async () => {
     await utils.tapAndWait('Chair');
    await utils.tapAndWait('Table');
    await utils.tapAndWait('Lamp');
    await utils.tapAndWait('Floor');
    await utils.tapAndWait('All');
  });
  it('should tap on some product card', async () => {
    await utils.tapAndWait('productCard1');
    await utils.tapAndWait('productDetailBackButton');
    await utils.tapAndWait('productCard2');
    await utils.tapAndWait('productDetailBackButton');
    await element(by.id('productsFlatList')).scroll(400, 'down', 0.85, 0.85);
    await utils.tapAndWait('productCard3');
    await utils.tapAndWait('productDetailBackButton');
    await utils.tapAndWait('productCard4');
    await utils.tapAndWait('productDetailBackButton');
    await element(by.id('productsFlatList')).scroll(400, 'up', 0.85, 0.85);
  });
});
