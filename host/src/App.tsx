// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { lazy } from "react";

import { Suspense } from "react";
import "./App.css";
//@ts-expect-error - Remote
const AboutCard = lazy(() => import("vite_remote/AboutCard"));
//@ts-expect-error - Remote
const ProjectsCard = lazy(() => import("vite_webpack/ProjectsCard"));

function App() {
  return (
    <>
      <div className="cards-container">
        <div className="card-left">
          <Suspense fallback="Loading About Card">
            <AboutCard />
          </Suspense>
        </div>
        <div className="card-right">
          <Suspense fallback="Loading Projects Card">
            <ProjectsCard />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
