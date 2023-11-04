import { z } from 'zod';

export const bookServiceSchema = z.object({
    body: z.object({
        serviceId: z.number(),
        firstName: z.string({
            required_error: 'First name is required',
            invalid_type_error: 'Enter correct full name',
        }),
        lastName: z.string({
            required_error: 'Last name is required',
            invalid_type_error: 'Enter correct last name',
        }),
        email: z.string().email(),
        phone: z
            .string()
            .min(10)
            .max(10)
            .transform((v) => Number(v) || 0),
    }),
});

export const serviceDetailsSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
});
