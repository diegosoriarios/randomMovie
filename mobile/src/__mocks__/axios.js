import jest from 'jest-mock';
import mockData from './mockData.mock';

export default {
  get: jest.fn(() => Promise.resolve({data: {response: mockData}})),
};
