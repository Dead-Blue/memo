const localStorageMock = {
  getItem: jest.fn(key => (JSON.stringify({[key]:key}))),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock