import { useState, useEffect } from "react";

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
    <div className="fixed inset-0 z-10 flex h-screen items-center justify-center bg-black text-white">
      <div className="max-w-xl rounded-lg p-10 shadow-xl">
        <h1 className="mt-5 border-b-2 border-black py-2 text-4xl font-bold">
          Welcome to the London Brutalist Map!
        </h1>
        <p className="pb-2">
          This site serves as a guide to London's Brutalist architecture,
          allowing you to learn about, and track visits to various Brutalist
          buildings.
        </p>
        <h2 className="py-2 text-2xl font-bold">Explore the map:</h2>
        <div>
          <ul className="list-disc pl-5">
            <li className="p-1">
              Hover over markers to see the name of the building.
            </li>
            <li className="p-1">
              Click the marker to see more information about the building and
              mark the building as visited.
            </li>
            <li>Unvisited buildings will be red, visited ones are green.</li>
          </ul>
        </div>
        <h2 className="py-2 text-2xl font-bold">See Your Visited Buildings:</h2>
        <ul className="list-disc pl-5">
          <li className="p-1">
            At the bottom of the page you can find a visited count, showing how
            many of the 104 buildings you've visited.
          </li>
        </ul>
        <button
          onClick={handleClose}
          className="mt-8 w-full rounded-lg bg-white p-5 text-black hover:bg-neutral-600"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
