import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import { getServiceDetails } from '@/state/queries';
import BookService from './BookService';

const ServiceDetails = () => {
    const params = useParams();

    const {
        isLoading,
        isError,
        isSuccess,
        data: serviceDetails,
    } = useQuery({
        queryKey: ['serviceDetails', params.id],
        queryFn: getServiceDetails,
    });

    return (
        <div className="service">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Oops, Please refresh the page.</p>}
            {isSuccess && serviceDetails && serviceDetails.id && (
                <div className="flex justify-center mt-5 gap-10 flex-wrap">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>{serviceDetails.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex mb-5 ">
                                <h6 className="mr-5  font-bold w-[100px] text-left">Category: </h6>
                                <p className="flex-1 text-left">{serviceDetails.category}</p>
                            </div>
                            <div className="flex mb-5 ">
                                <h6 className="mr-5  font-bold w-[100px] text-left">Duration: </h6>
                                <p className="flex-1 text-left">{serviceDetails.duration}</p>
                            </div>
                            <div className="flex mb-5 ">
                                <h6 className="mr-5  font-bold w-[100px] text-left">Price: </h6>
                                <p className="flex-1 text-left">{serviceDetails.price}</p>
                            </div>
                            <div className="flex mb-5 ">
                                <h6 className="mr-5  font-bold w-[100px] text-left">
                                    Description:{' '}
                                </h6>
                                <p className="flex-1 text-left">{serviceDetails.description}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {/* <Link to={`/services/${serviceDetails.id}/book`}>
                                <Button>Book Service</Button>
                            </Link> */}
                        </CardFooter>
                    </Card>
                    <BookService />
                </div>
            )}
        </div>
    );
};

export default ServiceDetails;
