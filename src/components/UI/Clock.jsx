import React, { useState, useEffect } from "react";

const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        const countDown = () => {
            const destination = new Date("September 21, 2024").getTime();
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const difference = destination - now;

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                if (difference < 0) {
                    clearInterval(interval);
                    setDays(0);
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                } else {
                    setDays(days);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
                }
            }, 1000);

            return () => clearInterval(interval);
        };

        countDown();
    }, []);

    return (
        <div className="clock__wrapper d-flex align-items-center gap-5">
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{days}</h1>
                    <h5 className="text-white fs-6">Días</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{hours}</h1>
                    <h5 className="text-white fs-6">Horas</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{minutes}</h1>
                    <h5 className="text-white fs-6">Minutos</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{seconds}</h1>
                    <h5 className="text-white fs-6">Segundos</h5>
                </div>
            </div>
        </div>
    );
};

export default Clock;
