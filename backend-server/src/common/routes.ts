import express from 'express';
import {
    bookService,
    getServiceDetails,
    getServices,
} from '../controllers/services';
import { validate } from '../middlewares/validate';
import { bookServiceSchema, serviceDetailsSchema } from './validation';
export const router = express.Router();

router.get('/api/services', getServices);
router.get(
    '/api/services/:id',
    validate(serviceDetailsSchema),
    getServiceDetails,
);
router.post('/api/bookings', validate(bookServiceSchema), bookService);
