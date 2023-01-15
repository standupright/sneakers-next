import axios, { AxiosResponse } from 'axios';
import { MOCKED_DATA } from '../mocks/prices';
import { Price } from '../types/prices';
import { fetchData } from './fetchData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetch data prices', () => {
    let response: Promise<AxiosResponse<Price[]>>;
    // mocks data
    beforeAll(() => {
        response = new Promise(() => {
            return {
                data: MOCKED_DATA,
                status: 200,
                statusText: 'Ok',
                headers: {},
                config: {},
            };
        });
    });

    it('Fetching data correctly', async () => {
        mockedAxios.get.mockReturnValue(response);
    });
});

export {};
