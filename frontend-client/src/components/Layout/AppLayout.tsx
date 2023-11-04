import { Link, Outlet } from 'react-router-dom';
import { Button } from '../ui/button';

const AppLayout = () => {
    return (
        <div className="wrapper">
            <Link to="services">
                <Button>View Services</Button>
            </Link>
            <Outlet />
        </div>
    );
};

export default AppLayout;
