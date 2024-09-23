import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div
      key={interval}
      className="flex flex-col items-center px-6 py-3 bg-white bg-opacity-20 rounded-lg"
    >
      <span className="text-2xl font-bold">{timeLeft[interval]}</span>
      <span className="text-sm">{interval}</span>
    </div>
  ));
  return (
    <div className="flex space-x-4 justify-center">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>The event has started!</span>
      )}
    </div>
  );
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.string.isRequired,
};
