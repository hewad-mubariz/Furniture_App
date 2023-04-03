
export const tapAndWait = async (selector ,delay = 500) => {
  await element(by.id(selector)).tap();
  await new Promise((resolve) => setTimeout(resolve, delay));
};