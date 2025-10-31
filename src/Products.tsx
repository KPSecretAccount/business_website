import { Outlet } from "react-router";
import { useNavigate } from 'react-router';

export function Products() {
    const navigate = useNavigate();

    const handleGoToMain = () => {
        navigate('/about'); // Navigates to /#/about
    };

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={handleGoToMain}>Go to About</button>
        </div>
    );
}




export default function Product() {
    return (
        <div>
            <h1>Products</h1>
            { <Products/>}
            <Outlet />
        </div>
    );
}
