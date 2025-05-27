import React from "react";
import ReactDOM from "react-dom/client";
import ProjectsCard from "./components/ProjectsCard";
import "./index.scss";
import "tailwindcss/tailwind.css";

const App = () => (
  <div>
    <ProjectsCard />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
