import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import { getServices } from '@/state/queries';
import { Service } from '@/utils/types';

const Services = () => {
    const { isLoading, isError, isSuccess, data } = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    });

    return (
        <div className="services">
            <h1 className="p-5 text-5xl">Services</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Oops, Please refresh the page.</p>}
            {isSuccess && data.length === 0 && <p>You do not have any services.</p>}
            {isSuccess && data.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                    {data.map((service: Service, index: number) => (
                        <Card className="w-[350px]" key={index}>
                            <CardHeader>
                                <CardTitle>{service.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-4 justify-center">
                                <h6>Category: </h6>
                                <p>{service.category}</p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Link to={`/services/${service.id}`}>
                                    <Button>View Detials</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
