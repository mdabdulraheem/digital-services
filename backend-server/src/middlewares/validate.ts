import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export const validate =
    (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                params: req.params,
            });
            return next();
        } catch (error: any) {
            return res.status(400).json(error.issues[0].message);
        }
    };
