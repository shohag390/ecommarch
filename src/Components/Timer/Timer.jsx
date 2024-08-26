import React, { useEffect, useState } from "react";

const Timer = ({ endDate }) => {
  const [countDown, setCountDown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    secounds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const duration =
        typeof endDate === "number" ? endDate - now : endDate.getTime() - now;

      const days = String(
        Math.floor(duration / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const secounds = String(
        Math.floor((duration % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setCountDown({
        days,
        hours,
        minutes,
        secounds,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="pt-[6px] pb-[20px] flex gap-[10px]">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[35px] w-[35px] bg-[#1e3d59] text-white flex items-center justify-center rounded-md">
          <p>{Number(countDown?.days)}</p>
        </div>
        <h4>Days</h4>
      </div>
      <h1 className="font-bold">:</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[35px] w-[35px] bg-[#1e3d59] text-white flex items-center justify-center rounded-md">
          <p>{Number(countDown?.hours)}</p>
        </div>
        <h4>Hours</h4>
      </div>
      <h1 className="font-bold">:</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[35px] w-[35px] bg-[#1e3d59] text-white flex items-center justify-center rounded-md">
          <p>{Number(countDown?.minutes)}</p>
        </div>
        <h4>Mins</h4>
      </div>
      <h1 className="font-bold">:</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[35px] w-[35px] bg-[#1e3d59] text-white flex items-center justify-center rounded-md">
          <p>{Number(countDown?.secounds)}</p>
        </div>
        <h4>Sec</h4>
      </div>
    </div>
  );
};

export default Timer;
// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
// md:py-[50px]
// md:px-[80px] px-[20px]
