import { useState, useEffect } from "react";
import "./landingPage.scss";

const LandingPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasSeenLandingPage = localStorage.getItem("hasSeenLandingPage");
    if (hasSeenLandingPage) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenLandingPage", "true");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-10 landing-page h-screen">
      <div className="p-10 rounded-lg shadow-xl max-w-xl">
        <h1 className="mt-5">Welcome to the London Brutalist Map!</h1>
        <p>
          This site serves as a guide to London's Brutalist architecture,
          allowing you to learn about, and track visits to various Brutalist
          buildings.
        </p>
        <h2>Explore the map:</h2>
        <div>
          <ul>
            <li>Hover over markers to see the name of the building.</li>
            <li>
              Click the marker to see more information about the building and
              mark the building as visited.
            </li>
            <li>Unvisited buildings will be red, visited ones are green.</li>
          </ul>
        </div>
        <h2>View Buildings:</h2>
        <ul>
          <li>
            View all the buildings in a list format. You can access this by
            clicking on the visited count.
          </li>
        </ul>
        <h2>See Your Visited Buildings:</h2>
        <ul>
          <li>
            At the bottom of the page you can find a visited count, showing how
            many of the 104 buildings you've marked as visited.
          </li>
        </ul>
        <button
          onClick={handleClose}
          className="bg-white hover:bg-neutral-600 text-black p-5 w-full rounded-lg mt-8 "
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
