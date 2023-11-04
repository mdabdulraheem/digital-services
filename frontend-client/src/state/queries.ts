import { BASE_URL } from '@/utils/constants';
import { QueryType } from '@/utils/types';
import axios from 'axios';

export const getServices = async () => {
    const services = await axios.get(BASE_URL + '/api/services');
    return services.data;
};

export const getServiceDetails = async (query: QueryType) => {
    const serviceId = Number(query.queryKey[1]);
    const services = await axios.get(BASE_URL + `/api/services/${serviceId}`);
    return services.data;
};
