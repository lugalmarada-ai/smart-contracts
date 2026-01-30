"use client";

import { useEffect, useState } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    endDate: Date | number; // Unix timestamp or Date object
    onEnd?: () => void;
}

export default function CountdownTimer({ endDate, onEnd }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isEnded, setIsEnded] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = (): TimeLeft | null => {
            const targetTime = typeof endDate === 'number' ? endDate * 1000 : endDate.getTime();
            const now = Date.now();
            const difference = targetTime - now;

            if (difference <= 0) {
                if (!isEnded) {
                    setIsEnded(true);
                    onEnd?.();
                }
                return null;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        // Update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate, isEnded, onEnd]);

    if (isEnded || !timeLeft) {
        return (
            <div className="text-center">
                <p className="text-red-400 font-bold text-sm">Presale Ended</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center gap-2">
            {timeLeft.days > 0 && (
                <div className="flex flex-col items-center bg-slate-800/50 rounded-lg px-2 py-1 min-w-[3rem]">
                    <span className="text-lg font-bold font-mono text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[0.6rem] text-gray-400 uppercase">Days</span>
                </div>
            )}
            <div className="flex flex-col items-center bg-slate-800/50 rounded-lg px-2 py-1 min-w-[3rem]">
                <span className="text-lg font-bold font-mono text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[0.6rem] text-gray-400 uppercase">Hrs</span>
            </div>
            <span className="text-primary font-bold text-xl animate-pulse">:</span>
            <div className="flex flex-col items-center bg-slate-800/50 rounded-lg px-2 py-1 min-w-[3rem]">
                <span className="text-lg font-bold font-mono text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[0.6rem] text-gray-400 uppercase">Min</span>
            </div>
            <span className="text-primary font-bold text-xl animate-pulse">:</span>
            <div className="flex flex-col items-center bg-slate-800/50 rounded-lg px-2 py-1 min-w-[3rem]">
                <span className="text-lg font-bold font-mono text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[0.6rem] text-gray-400 uppercase">Sec</span>
            </div>
        </div>
    );
}
