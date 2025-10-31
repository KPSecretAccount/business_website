import { Outlet } from "react-router";
import { useNavigate } from 'react-router';

export function Homepg() {
    const navigate = useNavigate();

    const handleGoToMain = () => {
        navigate('/main'); // Navigates to /#/about
    };

    return (
        <div>
            <h1>Nav</h1>
            <button onClick={handleGoToMain}>Go to DashBoard</button>
        </div>
    );
}



export default function About() {
    return (
        <div>
            <h1>About</h1>
            <h2>Michaela Aiello</h2>
            <h3>CEO and Founder</h3>
            <p>Growing up the youngest of five in a lower middle class family, everything was a DIY. My dads brains and the helping hands of his kids. I didn't see helping as something to dread but rather found enjoyment in it. I’ve helped my dad on major projects since I was 8. I've never defined myself as a “girly girl” but rather a girl- now woman- who isn't afraid of following her dreams.
            </p>
            {< About/>}
            <Outlet />
        </div>
    );
}
