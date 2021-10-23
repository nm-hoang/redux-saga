import axiosClient from './axiosClient';

const cityUrl = '/cities';

const cityApi = {
  getAll: () => {
    const url = `${cityUrl}`;
    return axiosClient.get(url);
  },
};

export default cityApi;
