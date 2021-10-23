import axiosClient from './axiosClient';
import { City, ListReponse } from '../models';

const cityUrl = '/cities';

const cityApi = {
  getAll(): Promise<ListReponse<City>> {
    const url = `${cityUrl}`;
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      }
    });
  },
};

export default cityApi;

