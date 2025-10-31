import { Outlet } from "react-router";
import { useNavigate } from 'react-router';

export function Homepg() {
    const navigate = useNavigate();

    const handleGoToAbout = () => {
        navigate('/about'); // Navigates to /#/about
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleGoToAbout}>Go to About</button>
        </div>
    );
}



export default function Home() {
    return (
        <div>
            <h1>Home</h1>
    {<Home/>}
    <Outlet />
    </div>
);
}
