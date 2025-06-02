"use client";

import { useState, useEffect, useCallback } from "react";

interface UseCountdownProps {
  targetDate: Date;
  onExpire?: () => void;
}

interface CountdownResult {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  isExpired: boolean;
  formattedTime: string;
  formattedExpiredTime: string;
}

export function useCountdown({ targetDate, onExpire }: UseCountdownProps): CountdownResult {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        hours,
        minutes,
        seconds,
        isExpired: false,
      };
    } else {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }
  }, [targetDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      const result = calculateTimeLeft();
      setTimeLeft({
        hours: result.hours,
        minutes: result.minutes,
        seconds: result.seconds,
      });

      if (result.isExpired && !isExpired) {
        setIsExpired(true);
        onExpire?.();
      }
    }, 1000);

    // Initial calculation
    const initialResult = calculateTimeLeft();
    setTimeLeft({
      hours: initialResult.hours,
      minutes: initialResult.minutes,
      seconds: initialResult.seconds,
    });
    setIsExpired(initialResult.isExpired);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, isExpired, onExpire]);

  const formattedTime = `${timeLeft.hours.toString().padStart(2, "0")}:${timeLeft.minutes.toString().padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`;

  const formattedExpiredTime = `${(targetDate.getMonth() + 1).toString().padStart(2, "0")}.${targetDate.getDate().toString().padStart(2, "0")}, ${targetDate.getHours().toString().padStart(2, "0")}:${targetDate.getMinutes().toString().padStart(2, "0")}`;

  return {
    timeLeft,
    isExpired,
    formattedTime,
    formattedExpiredTime,
  };
}
