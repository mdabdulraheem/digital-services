import { FormSchemaType } from '@/components/BookService';
import { BASE_URL } from '@/utils/constants';
import axios from 'axios';

export const bookService = async (booking: FormSchemaType) => {
    const response = await axios.post(BASE_URL + '/api/bookings', booking);
    return response.data;
};
