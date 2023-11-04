import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { bookService } from '@/state/mutations';

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
});
export type FormSchemaType = z.infer<typeof formSchema>;

const BookService = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();

    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const mutation = useMutation({
        mutationFn: bookService,
        onError: () => {
            toast({
                description: <h2 className="text-md font-semibold">Oops, Please retry.</h2>,
                variant: 'destructive',
            });
        },
        onSuccess: () => {
            toast({
                description: (
                    <h2 className="text-md font-semibold">Service Booked successfully!.</h2>
                ),
                variant: 'success',
            });
            navigate('/services');
        },
    });

    const onSubmit = async (values: FormSchemaType) => {
        const body = {
            ...values,
            serviceId: Number(params.id),
        };
        mutation.mutate(body);
    };

    return (
        <div className="book-service">
            <h1 className="my-5 text-3xl">Book Service</h1>
            <div className="flex justify-center">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-[400px] text-left"
                    >
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <>
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <>
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <>
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <>
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};
export default BookService;
