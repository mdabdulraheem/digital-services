import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Services from '../components/Services';
import AppLayout from '../components/Layout/AppLayout';
import ServiceDetails from '@/components/ServiceDetails';
import BookService from '@/components/BookService';

const ROUTES = (
    <Route path="/" element={<AppLayout />}>
        <Route index path="services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/services/:id/book" element={<BookService />} />
    </Route>
);

const router = createBrowserRouter(createRoutesFromElements(ROUTES));

const Router = () => <RouterProvider router={router} />;
export default Router;
