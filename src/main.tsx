import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {HashRouter,Route, Routes} from "react-router";
import { useNavigate } from 'react-router';
import {Settings} from "./Settings.tsx";
import Home from "./Home.tsx";


export function Dashboard() {
    const navigate = useNavigate();

    const handleGoToAbout = () => {
        navigate('about'); // Navigates to /#/about
    };

    return (
        <div>
            <h1>Heritage Home Co</h1>
            <button onClick={handleGoToAbout}>Go to About</button>
            <p>Many families want healthier, energy-efficient homes, but most houses on the market are built with outdated methods that waste energy, compromise air quality and ultimately hurt our earth's blueprint. The result? Higher costs, unhealthy living environments and a harmful impact on our planet. Heritage Home Co. fills this gap by designing the home YOU want – prioritizing the planet and people, ultimately offering comfort, long term sustainability and peace of mind.</p>
        </div>
    );
}

export function Outlet () {

}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Dashboard />}>
                  <Route path="home" element={<Home />} />
                  <Route path="settings" element={<Settings />} />
              </Route>
          </Routes>

      </HashRouter>

  </StrictMode>,
)
