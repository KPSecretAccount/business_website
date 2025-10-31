import { Outlet } from "react-router";
import { useNavigate } from 'react-router';

export function Settings() {
    const navigate = useNavigate();

    const handleGoToAbout = () => {
        navigate('/about'); // Navigates to /#/about
    };

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={handleGoToAbout}>Go to About</button>
        </div>
    );
}




export default function Setting() {
    return (
        <div>
            <h1>Settings</h1>
    { <Settings/>}
    <Outlet />
    </div>
);
}
