import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VisitedCount: React.FC = () => {
  const [buildingsCount, setCount] = useState(0);

  useEffect(() => {
    const calculateVisitedNumber = () => {
      const visitedNumber = Object.keys(localStorage).filter(
        (key) => localStorage.getItem(key) === "visited"
      ).length;

      setCount(visitedNumber);
    };
    calculateVisitedNumber();
    const interval = setInterval(calculateVisitedNumber, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/building-index">
      <h2>{`Visited: ${buildingsCount}/105`}</h2>
    </Link>
  );
};

export default VisitedCount;
