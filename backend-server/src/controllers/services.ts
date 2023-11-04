import { NextFunction, Request, Response } from 'express';
import { SERVICES } from '../common/constants';
import { z } from 'zod';
import { bookServiceSchema } from '../common/validation';

type BOOKSERVICETYPE = z.infer<typeof bookServiceSchema>;
let BOOKINGS: Array<BOOKSERVICETYPE> = [];

export const getServices = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        return res.status(200).send(SERVICES);
    } catch (error) {
        return res.status(500).send();
    }
};

export const getServiceDetails = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const service = SERVICES.find((service) => service.id === Number(id));
        if (!service) {
            return res.send(400).send('Service Not Found');
        }
        return res.status(200).send(service);
    } catch(error) {
        return res.status(500).send();
    }
};

export const bookService = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const body: BOOKSERVICETYPE = req.body;
        BOOKINGS.push(body);
        console.log('Bookings: ', BOOKINGS);
        return res.status(200).send();
    } catch(error) {
        return res.status(500).send();
    }
};
