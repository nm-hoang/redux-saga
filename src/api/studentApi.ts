import axiosClient from './axiosClient';
import { Student, ListReponse, ListParams } from '../models';

const studentUrl = '/students';

const studentApi = {
  getAll(params: ListParams): Promise<ListReponse<Student>> {
    const url = `${studentUrl}`;
    return axiosClient.get(url, { params });
  },
  getById(id: string): Promise<Student> {
    const url = `${studentUrl}/${id}`;
    return axiosClient.get(url);
  },
  add(data: ListParams): Promise<Student> {
    const url = `${studentUrl}`;
    return axiosClient.post(url, data);
  },
  update(data: Student): Promise<Student> {
    const url = `${studentUrl}`;
    return axiosClient.patch(url, data);
  },
  remove(id: string): Promise<any> {
    const url = `${studentUrl}/${id}`;
    return axiosClient.get(url);
  },
};

export default studentApi;
;
