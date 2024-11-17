import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";


function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-semibold">01-Stopwatch</h1>
      <div className="h-[200px] w-[200px] flex flex-col items-center justify-between py-8 px-8 border-[1px] border-solid rounded-lg bg-gray-400">
        <div className="text-2xl font-semibold py-4">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="w-1/3 max-w-sm flex flex-row justify-center gap-7">
          {running ? (
            // <button
            //   className="border rounded-lg py-1 px-3.5 bg-white"
            //   onClick={() => {
            //     setRunning(false);
            //   }}
            // >
            //   Stop
            // </button>
            <div className="text-2xl text-[#fff] cursor-pointer"  onClick={()=>{setRunning(false)}}>
              <FaPause />
            </div>
          ) : (
            // <button
            //   className="border rounded-lg py-1 px-3.5 bg-white"
            //   onClick={() => {
            //     setRunning(true);
            //   }}
            // >
            //   Start
            // </button>
            <div className="text-2xl text-[#fff] cursor-pointer"  onClick={()=>{setRunning(true)}}>
              <FaPlay />
            </div>
          )}
          <div className="text-2xl text-[#fff] font-[600] cursor-pointer"  onClick={()=>{setTime(0)}}>
            <GrPowerReset />
          </div>
          {/* <button onClick={()=>{setRunning(true)}}>Start</button> */}
          {/* <button onClick={()=>{setRunning(false)}}>Stop</button> */}
          {/* <button
            className="border rounded-lg py-1 px-3.5 bg-white"
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
